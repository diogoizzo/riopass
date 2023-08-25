import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'PUT') {
      const token = await getToken({ req });
      const { id } = req.query;
      if (token) {
         const updatedPhoto = await prisma.photo.update({
            where: {
               id: String(id)
            },
            data: {
               ...req.body
            }
         });
         if (updatedPhoto) {
            res.status(200).json(updatedPhoto);
         } else {
            res.status(500).send(
               'Não foi possível atualizar as informações da imagem'
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
