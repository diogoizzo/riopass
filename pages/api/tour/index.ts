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
         const tours = await prisma.tour.findMany({
            include: {
               categories: true
            }
         });
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
      const { price, finalPrice, durationHours } = data;
      delete data.id;
      delete data.featuredPhoto;
      delete data.itinerary;
      delete data.photoGallery;
      delete data.featuredPhotoId;
      if (token) {
         if (data.categories?.length > 0) {
            const tour = await prisma.tour.create({
               data: {
                  ...data,
                  price: Number(price),
                  finalPrice: Number(finalPrice),
                  durationHours: Number(durationHours),
                  categories: {
                     connect: data.categories
                  }
               }
            });
            res.status(200).json(tour);
         } else {
            delete data.categories;
            const tour = await prisma.tour.create({
               data: {
                  ...data,
                  price: Number(price),
                  finalPrice: Number(finalPrice),
                  durationHours: Number(durationHours)
               }
            });
            res.status(200).json(tour);
         }

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
