import MercadoPagoConfig, {Preference} from "mercadopago";
import {redirect} from "next/navigation";
import {createClient} from "@supabase/supabase-js";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCES_TOKEN!,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PRIVATE_SUPABASE_KEY!,
);

export default async function Home() {
  const donations = await supabase
    .from("donations")
    .select("*")
    .then(
      ({data}) =>
        data as unknown as Promise<
          {id: number; created_at: number; amount: number; message: string}[]
        >,
    );

  async function donate(formData: FormData) {
    "use server";

    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: "donacion",
            title: formData.get("message") as string,
            quantity: 1,
            unit_price: Number(formData.get("amount")),
          },
        ],
        back_urls: {
          success: "http://localhost:3000/",
        },
      },
    });

    redirect(preference.sandbox_init_point!);
  }

  return (
    <>
      <header className="m-auto pl-8 text-xl font-bold leading-[4rem]">stream-donancy</header>
      <section className="dark container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-background px-4 font-sans antialiased">
        <section className="py-8">
          <article>
            <form action={donate} className="m-auto grid max-w-96 gap-8 border p-4">
              <label className="grid gap-2">
                <span>Valor</span>
                <Input name="amount" type="number" />
              </label>
              <label className="grid gap-2">
                <span>Tu mensaje en la donación</span>
                <Textarea name="message" />
              </label>
              <Button>Enviar</Button>
            </form>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cantidad</TableHead>
                  <TableHead className="text-right">Mensaje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map(({id, amount, message}) => (
                  <TableRow key={id}>
                    <TableCell className="font-bold">
                      {amount.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </TableCell>
                    <TableHead className="text-right">{message}</TableHead>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </article>
        </section>
      </section>
      <footer className="text-center leading-[4rem] opacity-70">
        © {new Date().getFullYear()} stream-donancy
      </footer>
    </>
  );
}
