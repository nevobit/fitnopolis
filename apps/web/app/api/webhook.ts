import type { NextApiRequest, NextApiResponse } from 'next'
import { MercadoPagoConfig, Payment, Preference } from 'mercadopago';
import { PreferenceRequest } from 'mercadopago/dist/clients/preference/commonTypes';
import { helebba } from '../../utils';
import { StatusDocument } from 'helebba-sdk';

type ResponseData = {
  message: string
}

const { MERCADOPAGO_ACCESS_TOKEN } = process.env;

const client = new MercadoPagoConfig({ accessToken: MERCADOPAGO_ACCESS_TOKEN! })
const preference = new Preference(client);
const paymentMercado = new Payment(client);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {

  if (req.body.payment.type !== "payment") return;

  if (req.body.payment.type == "payment") {
    const data = await paymentMercado.get({ id: req.body.payment["data.id"] })
    const orderId = data.external_reference;

    if (!orderId) return;

    const order = await helebba.getOrder(orderId);

    if (!order) return;

    if (data.status == "approved") {
      order.statusDocument = StatusDocument.Paid;
    }
  }
}