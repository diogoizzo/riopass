import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const token = await getToken({ req });
   if (req.method === 'POST') {
      console.log('Entrei aqui');
      if (token) {
         const { tourId } = req.query;
         const { order, ...step } = req.body;
         const orderNumber = Number(order);
         const createdStep = await prisma.itineraryStep.create({
            data: { ...step, tourId, order: orderNumber }
         });
         if (createdStep) {
            res.status(200).json(createdStep);
         } else {
            res.status(500).send(
               'Não foi possível criar a etapa do itinerário'
            );
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
