import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'DELETE') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const deletedCategory = await prisma.tour.delete({
            where: {
               id: id
            }
         });
         if (deletedCategory) {
            res.status(200).json(deletedCategory);
         } else {
            res.status(404).json({
               error: 'Não foi possível apagar a categoria - Categoria não encontrada'
            });
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
