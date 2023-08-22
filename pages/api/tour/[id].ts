import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const tour = await prisma.tour.findUnique({
            where: { id: id },
            include: {
               itinerary: true,
               photoGallery: true,
               featuredPhoto: true,
               categories: true
            }
         });
         if (tour) {
            res.status(200).json(tour);
         } else {
            res.status(404).json({ error: 'Tour não encontrado' });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'PATCH') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      const data = req.body;
      delete data.featuredPhoto;
      delete data.categories;
      delete data.itinerary;
      delete data.photoGallery;
      delete data.featuredPhotoId;
      if (token) {
         const tour = await prisma.tour.update({
            where: {
               id: id
            },
            data: {
               ...req.body
            }
         });
         if (tour) {
            res.status(200).json(tour);
         } else {
            res.status(404).json({ error: 'Tour não encontrado' });
         }
      } else {
         res.status(404).json({ message: 'Acesso Negado' });
      }
   } else if (req.method === 'DELETE') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const deletedTour = await prisma.tour.delete({
            where: {
               id: id
            }
         });
         if (deletedTour) {
            res.status(200).json(deletedTour);
         } else {
            res.status(404).json({ error: 'Tour não encontrado' });
         }
      } else {
         res.status(401).send({ message: 'Acesso Negado' });
      }
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
