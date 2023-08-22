import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      const token = await getToken({ req });
      if (token) {
         const tours = await prisma.tourCategory.findMany();
         if (tours) {
            res.status(200).json(tours);
         } else {
            res.status(404).json({ error: 'Nenhuma categoria encontrada' });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'POST') {
      const token = await getToken({ req });
      if (token) {
         const category = await prisma.tourCategory.create({
            data: {
               ...req.body
            }
         });
         res.status(200).json(category);
         // res.status(200).send('ok');
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
