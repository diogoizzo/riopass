import axios from 'axios';

export default class CategoryServices {
   static async getAll() {
      try {
         const res = await axios.get('/api/categorias');
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
   static async create(formData: any) {
      if (formData) {
         const formToSend = {
            name: formData.get('name'),
            enName: formData.get('enName'),
            esName: formData.get('esName')
         };
         const rest = await axios.post(`/api/categorias/`, formToSend);
         return rest.data;
      }
   }
}
