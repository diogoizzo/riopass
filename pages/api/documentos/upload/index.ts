import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import s3 from 'aws-sdk/clients/s3';
import { randomUUID } from 'crypto';
import { S3Control } from 'aws-sdk';

const region = process.env.REGION;
const bucketName = process.env.BUCKET_NAME;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const bucket = new s3({
   apiVersion: '2006-03-01',
   region,
   accessKeyId,
   secretAccessKey,
   signatureVersion: 'v4'
});

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      const token = await getToken({ req });
      if (token) {
         const fileName = randomUUID();
         const params = {
            Bucket: bucketName,
            Key: fileName,
            Expires: 60
         };
         const uploadUrl = await bucket.getSignedUrlPromise(
            'putObject',
            params
         );
         if (uploadUrl) {
            res.status(200).json({
               uploadUrl,
               fileName
            });
         } else {
            res.status(503).json({
               error: 'Não foi possível criar a url'
            });
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
