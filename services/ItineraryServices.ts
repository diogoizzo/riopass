import axios from 'axios';
import IImage from '../interfaces/IImage';
import { IItineraryForm } from '../components/parts/ItineraryForm';

interface ICreateParams {
   form: IItineraryForm;
   tourId: string;
}

interface IUpdateParams {
   form: IItineraryForm;
   tourId?: string;
   stepId?: string;
}

export default class ItineraryServices {
   static async create({ form, tourId }: ICreateParams) {
      const { data } = await axios.post(`/api/itinerario/${tourId}`, form);
      return data;
   }
   static async delete({
      stepId,
      tourId
   }: {
      stepId?: string;
      tourId?: string;
   }) {
      if (stepId && tourId) {
         const { data } = await axios.delete(
            `/api/itinerario/${tourId}/${stepId}`
         );
         return data;
      }
   }
   static async update({ form, stepId, tourId }: IUpdateParams) {
      if (form && stepId && tourId) {
         const res = await axios.put(
            `/api/itinerario/${tourId}/${stepId}`,
            form
         );
         return res.data;
      }
   }
}
