import { MercadoPagoConfig, Preference } from 'mercadopago';
import { PreferenceRequest } from 'mercadopago/dist/clients/preference/commonTypes';
import { ContactType, helebbaClient } from 'helebba-sdk';
import { NextResponse } from 'next/server';
import { NextApiResponse } from 'next';

const apiKey = '89a3cdc868e3ef42a67b28078d105c2bb8a79c749cc7470201ccb532bcfce605cb1a5a4c40171026d1614f6b2ab2bd99bea7e4c7050ff9f980081555a6ca44b68a30cb9589dc5369d26a1842270aa6a6fe4c4e365da28a942151860cd07a641ed8f8889c3c6d10ce9ad7403c9ec7eb720dd9cff1164fb5d43c2ad914d0baaba366b5f3844fd5c648f4065d1f0c94b3284abe0df5360e8b246d433b83d73ec9dcfa5b92db2ddd315726938e000b946b0775475fc6f767bde04d08d117eb515ace7d27545cd5da7d082f4983e0c16c226ac0bb9a7d4b7ecf45d2f548a00427d4b1c926ac30c20db04efbf7b3ef1dc1455e834927a68b15a5bc4b4f3a74d03cbcc437191229353d6681cb10c10895b4b658';
const helebba = helebbaClient(apiKey);

const { MERCADOPAGO_ACCESS_TOKEN } = process.env;

const client = new MercadoPagoConfig({ accessToken: MERCADOPAGO_ACCESS_TOKEN! })
const preference = new Preference(client);

export async function POST(
  req: Request,
) {
  const body = await req.json();

  const createdContact = await helebba.createContact({
    iban: body.identification,
    name: body.name, email: body.email, mobile: body.phone, isPerson: true, account: "e610f0f3-b380-4a1d-8900-17fe25ce6cbd", type: ContactType.Lead, shippingAddresses: [{
      shippingId: "",
      name: body.name,
      address: body.address,
      city: body.city,
      postalCode: 0,
      province: '',
      country: 'Colombia',
      countryCode: '',
    }], billAddress: {
      address: body.address,
      city: body.city,
      country: 'Colombia',
    }
  });

  let order = {
    contact: createdContact.id,
    account: "e610f0f3-b380-4a1d-8900-17fe25ce6cbd",
    date: Date.now().toString(),
    subtotal: body.total_price,
    total: body.total_price,
    contactName: body.name,
    docType: "sales-order",
    products: [],
    customFields: [{ field: 'link', value: '' }]
  };

  const bodyInfo: PreferenceRequest = {
    items: [
      {
        id: crypto.randomUUID(),
        title: body.title,
        quantity: 1,
        unit_price: body.total_price
      }
    ],
    notification_url: "/api/webhook",
    external_reference: body.id
  };

  try {
    const result = await preference.create({ body: bodyInfo });

    if (result.init_point) {
      order.customFields[0] = { field: 'link', value: result.init_point };
      const createdOrder = await helebba.createOrder(order);
      console.log(createdOrder);

      return NextResponse.json({ paymentLink: result.init_point }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'No se pudo obtener el link de pago' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error al crear la preferencia:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}