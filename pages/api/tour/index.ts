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
         const tours = await prisma.tour.findMany();
         if (tours) {
            res.status(200).json(tours);
         } else {
            res.status(404).json({ error: 'Nenhum tour encontrado' });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'POST') {
      const token = await getToken({ req });
      const data = req.body;
      console.log(data);
      const { price, finalPrice, durationHours } = data;
      delete data.id;
      delete data.featuredPhoto;
      delete data.categories;
      delete data.itinerary;
      delete data.photoGallery;
      delete data.featuredPhotoId;
      if (token) {
         const tour = await prisma.tour.create({
            data: {
               ...data,
               price: Number(price),
               finalPrice: Number(finalPrice),
               durationHours: Number(durationHours),
               itinerary: undefined,
               featuredPhoto: {
                  create: {
                     name: 'Teste',
                     description: 'Imagem de teste para criação de tour',
                     src: 'https://images.unsplash.com/photo-1682686580186-b55d2a91053c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80'
                  }
               }
            }
         });
         res.status(200).json(tour);
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
