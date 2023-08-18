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
         const user = await prisma.user.findUnique({
            where: { id: id },
            select: {
               name: true,
               email: true,
               phone: true,
               createdAt: false,
               updatedAt: false,
               password: false,
               id: true
            }
         });
         if (user) {
            res.status(200).json(user);
         } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'PATCH') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const user = await prisma.user.update({
            where: {
               id: id
            },
            data: {
               ...req.body
            }
         });
         if (user) {
            res.status(200).json(user);
         } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
         }
      } else {
         res.status(404).json({ message: 'Acesso Negado' });
      }
   } else if (req.method === 'DELETE') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const deletedUser = await prisma.user.delete({
            where: {
               id: id
            }
         });
         if (deletedUser) {
            res.status(200).json(deletedUser);
         } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
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
