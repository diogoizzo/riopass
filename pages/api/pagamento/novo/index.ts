import type { NextApiRequest, NextApiResponse } from 'next';
import MercadoPagoServices from '../../../../services/MercadoPagoServices';
import bcrypt from 'bcrypt';
import prisma from '../../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   async function purchaseAndPreference(userId: string, form: any) {
      //cria uma nova comprar do banco de dados relacionada ao id do usuario
      //cria uma preferencia com o id da compra como referencia externa
      //retorna o init link da preferencias
      try {
         const purchase = await prisma.purchase.create({
            data: {
               amount: Number(form.amount),
               price: Number(form.price),
               buyerId: userId
            }
         });
         const preference = await MercadoPagoServices.createPreference({
            name: form.name,
            cpf: form.cpf,
            email: form.email,
            amount: Number(form.amount),
            purchaseId: purchase.id
         });
         console.log(preference);
         res.status(200).json({ initPoint: preference.init_point });
      } catch (error) {
         console.log(error);
         res.status(500).json({
            message: 'Não foi possível criar a compra e a preferência'
         });
      }
   }
   if (req.method === 'POST') {
      const { userId, ...form } = req.body;
      if (userId) {
         await purchaseAndPreference(userId, form);
      } else {
         //cria o novo usuário
         //cria uma nova comprar do banco de dados relacionada ao id do usuario
         //cria uma preferencia com o id da compra como referencia externa
         //retorna o init link da preferencias
         let user;
         const hash = await bcrypt.hash(form.password, 0);
         try {
            user = await prisma.user.create({
               data: {
                  name: form.name,
                  cpf: form.cpf,
                  email: form.email,
                  password: hash,
                  phone: form.phone
               }
            });
         } catch (error: any) {
            console.log(error.code);
            if (error.code === 'P2002') {
               res.status(500).json({
                  message: 'P2002'
               });
            } else {
               res.status(500).json({
                  message: 'Não foi possível criar o usuário'
               });
            }
         }

         user?.id && (await purchaseAndPreference(user.id, form));
      }
   } else {
      res.status(405).send('Essa rota não suporta o método da requisição');
   }
}
