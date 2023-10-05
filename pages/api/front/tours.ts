import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      try {
         const tours = await prisma.tour.findMany({
            select: {
               id: true,
               name: true,
               description: true,
               price: true,
               finalPrice: true,
               destination: true,
               durationHours: true,
               featuredPhoto: {
                  select: {
                     name: true,
                     description: true,
                     awsFileName: true,
                     src: true
                  }
               },
               categories: {
                  select: {
                     name: true
                  }
               },
               url: true
            }
         });
         if (tours) {
            res.status(200).json(tours);
         } else {
            res.status(500).json({
               message: 'Não foi possível encontrar nenhum tour cadastrado.'
            });
         }
      } catch (error) {
         console.log(error);
      }
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
