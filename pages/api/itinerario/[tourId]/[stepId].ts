import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const token = await getToken({ req });
   if (req.method === 'DELETE') {
      if (token) {
         const stepId = String(req.query.stepId);

         try {
            await prisma.itineraryStep.delete({
               where: { id: stepId }
            });

            res.status(200).send(
               'As etapas do itinerário foram apagadas com sucesso'
            );
         } catch (error) {
            console.error(error);
            res.status(500).send(
               'Não foi possível apagar as etapas do itinerário com sucesso'
            );
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'PUT') {
      if (token) {
         const { order, ...step } = req.body;
         const orderNumber = Number(order);
         const { stepId } = req.query;
         const updatedStep = await prisma.itineraryStep.update({
            where: { id: String(stepId) },
            data: { order: orderNumber, ...step }
         });

         if (updatedStep) {
            res.status(200).json(updatedStep);
         } else {
            res.status(500).send(
               'Não foi possível atualizar a etapa do itinerário'
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
