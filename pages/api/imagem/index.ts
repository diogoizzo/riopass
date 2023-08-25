import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'POST') {
      const token = await getToken({ req });
      const data = req.body;

      if (token) {
         if (!req.body.isFeatured) {
            delete data.isFeatured;
            const createdPhoto = await prisma.photo.create({
               data: {
                  ...data
               }
            });
            if (createdPhoto) {
               res.status(200).json(createdPhoto);
            } else {
               res.status(200).send('Não foi possível salvar a nova foto');
            }
         } else {
            const { tourId, ...rest } = data;
            delete rest.isFeatured;
            try {
               const createdPhoto = await prisma.photo.create({
                  data: {
                     ...rest,
                     featuredOfTourId: tourId
                  }
               });
               if (createdPhoto) {
                  res.status(200).json(createdPhoto);
               } else {
                  res.status(200).send('Não foi possível salvar a nova foto');
               }
            } catch (error: any) {
               if (error.code === 'P2002')
                  res.status(400).send(
                     'Já existe uma imagem principal para esse tour'
                  );
            }
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
