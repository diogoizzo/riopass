import axios from 'axios';
import IImage from '../interfaces/IImage';
import { IImageForm } from '../components/parts/ImageForm';

interface ICreateParams {
   form: IImageForm;
   src: string;
   awsFileName: string;
   tourId: string;
}

interface IUpdateParams {
   img: IImage;
   data: IImageForm;
}

export default class ImageServices {
   static async getAllById(id: string) {
      if (id) {
         const { data } = await axios(`/api/imagem/${id}`);
         return data;
      }
   }
   static async create({ form, src, awsFileName, tourId }: ICreateParams) {
      const sendForm = {
         ...form,
         src,
         awsFileName,
         tourId
      };
      const { data } = await axios.post('/api/imagem', sendForm);
      return data;
   }
   static async delete(img: IImage) {
      if (img) {
         const { data } = await axios.delete(
            `/api/imagem/${img.id}/${img.awsFileName}`
         );
         return data;
      }
   }
   static async update({ img, data }: IUpdateParams) {
      if (img && data) {
         const { name, description } = data;
         const res = await axios.put(`/api/imagem/${img.id}`, {
            name,
            description
         });
         return res.data;
      }
   }
}
