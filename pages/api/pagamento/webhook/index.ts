// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   console.log('#Inicio da resposta da api');
   console.log(req.body);
   //    const axioRes = await axios.get(
   //       `https://api.mercadopago.com/v1/payments/${req.body.data.id}?access_token=TEST-543325268962466-102013-eff252dab11558981b31b225623afcd6-99551418`
   //    );
   //    const payment = axioRes.data;
   //    console.log('Inicio da consulta de pagamento');
   //    console.log('Referencia externa:');
   //    console.log(payment.external_reference);
   //    console.log('Status:');
   //    console.log(payment.status);
   //    console.log('Id');
   //    console.log(payment.id);
   //    console.log('Fim da consulta de pagamento');
   //    console.log('#Fim da resposta da api');
   res.status(200).send('ok');
}
