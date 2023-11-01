import axios from 'axios';
import User from '../entities/User';
import { UserFromData } from '../components/sections/UserForm';

export default class UserServices {
   static async register(form: any) {
      const sendForm = { ...form, role: 'ADMIN' };
      const res = await axios.post('/api/register', sendForm);
      if (res.status === 200) {
         return true;
      } else {
         return false;
      }
   }
   static async registerClient(form: any) {
      const res = await axios.post('/api/register', form);
      if (res.status === 200) {
         return true;
      } else {
         return false;
      }
   }
   static async getAll() {
      try {
         const res = await axios.get('/api/usuarios');
         return User.createMany(res.data);
      } catch (e) {
         console.log(e);
      }
   }
   static async getById(id: any) {
      try {
         if (id) {
            const res = await axios.get(`/api/usuarios/${id}`);
            return res.data;
         }
      } catch (e) {
         console.log(e);
      }
   }
   static async updateById(formData: UserFromData) {
      try {
         const res = await axios.patch(
            `/api/usuarios/${formData.id}`,
            formData
         );
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
   static async delete(id?: string) {
      try {
         if (id) {
            const rest = await axios.delete(`/api/usuarios/${id}`);
            return rest.data;
         }
      } catch (e) {
         console.log(e);
      }
   }
}
