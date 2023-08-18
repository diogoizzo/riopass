import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'POST') {
      const { name, email, password, cpf, phone } = req.body;

      try {
         const hash = await bcrypt.hash(password, 0);
         try {
            const createdUser = await prisma.user.create({
               data: {
                  name: name,
                  email: email,
                  password: hash,
                  cpf: cpf,
                  phone: phone
               }
            });
         } catch (e) {
            console.log(e);
         }

         res.status(200).end();
      } catch (err: any) {
         res.status(503).json({ err: err.toString() });
      }
   } else {
      return res
         .status(405)
         .json({ error: 'This request only supports POST requests' });
   }
}
