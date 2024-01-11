import type {NextRequest} from "next/server";

import {createClient} from "@supabase/supabase-js";
import MercadoPagoConfig, {Payment} from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCES_TOKEN!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PRIVATE_SUPABASE_KEY!,
);

export async function POST(request: NextRequest) {
  const body = await request.json().then((data) => data as {data: {id: string}});

  const payment = await new Payment(client).get({id: body.data.id});

  const donation = {
    id: payment.id,
    amount: payment.transaction_amount,
    message: payment.description,
  };

  await supabase.from("donations").insert(donation);

  return Response.json({success: true});
}
