import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const token = await getToken({ req });
   if (req.method === 'POST') {
      if (token) {
         const { tourId } = req.query;
         const steps = req.body;

         const createdSteps = await prisma.itineraryStep.createMany({
            data: steps.map((step: any) => ({ ...step, tourId }))
         });
         if (createdSteps) {
            res.status(200).json(createdSteps);
         } else {
            res.status(500).send(
               'Não foi possível criar os etapas do itinerário'
            );
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'PUT') {
      if (token) {
         const steps = req.body;

         const updatedSteps = await Promise.all(
            steps.map((step: any) =>
               prisma.itineraryStep.update({
                  where: { id: step.id },
                  data: step
               })
            )
         );
         if (updatedSteps) {
            res.status(200).json(updatedSteps);
         } else {
            res.status(500).send(
               'Não foi possível atualizar as etapas do itinerário'
            );
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'DELETE') {
      if (token) {
         const stepIds = req.body;

         try {
            await Promise.all(
               stepIds.map((id: string) =>
                  prisma.itineraryStep.delete({
                     where: { id }
                  })
               )
            );

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
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
