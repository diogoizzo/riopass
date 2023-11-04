import axios from 'axios';
type CreatePreferenceArgs = {
   name: string;
   cpf: number;
   email: string;
   purchaseId: string;
   amount: number;
};

export default class MercadoPagoServices {
   static async createPreference({
      purchaseId,
      name,
      cpf,
      email,
      amount
   }: CreatePreferenceArgs) {
      const preference = await axios.post(
         `https://api.mercadopago.com/checkout/preferences?access_token=${process.env.MERCADOPAGO_ACCESS_KEY}`,
         {
            auto_return: 'all',
            external_reference: purchaseId,
            payer: {
               name: name,
               email: email,
               identification: {
                  type: 'CPF',
                  number: cpf
               }
            },
            items: [
               {
                  title: 'Rio Travel Club',
                  quantity: amount,
                  currency_id: 'BRL',
                  unit_price: 99.0,
                  picture_url:
                     'https://www.brasiltravelclub.com/img/travelclub.svg'
               }
            ],
            back_urls: {
               success: 'https://www.brasiltravelclub.com/perfil',
               pending: 'https://www.brasiltravelclub.com/perfil',
               failure: 'https://www.brasiltravelclub.com/perfil'
            }
         }
      );
      return preference.data;
   }

   static async getInitPoint(form: any) {
      const res = await axios.post('/api/pagamento/novo', form);
      return res.data;
   }
}
