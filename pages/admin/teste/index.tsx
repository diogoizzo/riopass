import axios from 'axios';
import React, { ChangeEvent } from 'react';

function uploadUrl() {
   async function uploadToS3(e: ChangeEvent<HTMLFormElement>) {
      const formData = new FormData(e.target);
      const file = formData.get('file');
      if (!file) return;
      const { data } = await axios.get('/api/documentos/upload/');
      const { uploadUrl, key } = data;
      try {
         await axios.put(uploadUrl, file);
      } catch (error) {
         console.log(error);
      }
      const openUrl = String(uploadUrl).split('?')[0];
      return openUrl;
   }

   async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
      const key = await uploadToS3(e);
   }
   return (
      <div>
         <p>Selecione o arquivo</p>
         <form onSubmit={handleSubmit}>
            <input type="file" name="file" id="" />
            <button type="submit">Upload</button>
         </form>
      </div>
   );
}

export default uploadUrl;
