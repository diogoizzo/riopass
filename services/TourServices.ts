import axios from 'axios';
import ITour from '../interfaces/ITour';

export default class TourServices {
   static async getAll() {
      try {
         const res = await axios.get('/api/tour');
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
   static async getById(id: string) {
      try {
         const res = await axios.get(`/api/tour/${id}`);
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
   static async updateById(formData: any) {
      if (formData) {
         const res = await axios.patch(`/api/tour/${formData.id}`, formData);
         return res.data;
      }
   }
   static async delete(id?: string) {
      if (id) {
         const rest = await axios.delete(`/api/tour/${id}`);
         return rest.data;
      }
   }

   static async create(formData: any) {
      if (formData) {
         const rest = await axios.post(`/api/tour/`, formData);
         return rest.data;
      }
   }
}
