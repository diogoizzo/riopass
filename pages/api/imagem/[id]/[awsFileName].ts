import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import AwsServices from '../../../../services/AwsServices';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'DELETE') {
      const token = await getToken({ req });
      const { id, awsFileName } = req.query;
      if (token) {
         const deleted = await AwsServices.delete(String(awsFileName));
         if (deleted) {
            const deletedPhoto = await prisma.photo.delete({
               where: {
                  id: String(id)
               }
            });
            if (deletedPhoto) {
               res.status(200).json(deletedPhoto);
            } else {
               res.status(400).send('Não foi possível apagar a foto');
            }
         } else {
            res.status(500).send('Não foi possível apagar a foto na AWS');
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
