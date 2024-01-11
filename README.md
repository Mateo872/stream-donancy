# Stream Donancy

**stream-donancy** es una aplicación Next.js creada con el propósito de practicar el desarrollo en Next.js. Integra diversas tecnologías como Tailwind CSS, Shadcn, Mercado Pago y Supabase para funcionalidades de base de datos. La aplicación permite a los usuarios realizar donaciones y cuenta con notificaciones en tiempo real para cada donación.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Un marco de React para construir aplicaciones web.
- [Tailwind CSS](https://tailwindcss.com/) - Un marco de CSS utilitario.
- [Shadcn](https://ui.shadcn.com/) - Una biblioteca CSS-in-JS ligera y flexible.
- [Mercado Pago](https://www.mercadopago.com/) - Una pasarela de pago para transacciones en línea.
- [Supabase](https://supabase.io/) - Una alternativa de código abierto a Firebase, que ofrece funcionalidades de base de datos en tiempo real.

## Características

- Formulario de donación: Los usuarios pueden completar un formulario con el monto de la donación y un mensaje personalizado.
- Integración de Mercado Pago: La aplicación utiliza Mercado Pago para manejar las transacciones de pago de manera segura.
- Notificaciones en tiempo real: Las notificaciones se muestran en tiempo real cada vez que se realiza una nueva donación.

## Inicio rápido

Seguí los siguientes pasos para configurar y ejecutar la aplicación localmente:

1. Cloná el repositorio:

   ```bash
   git clone [url_del_repositorio]
   ```

2. Instalá las dependencias:

   ```bash
   cd [directorio_del_proyecto]
   npm install
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env.local` en el directorio raíz y agrega las variables de entorno necesarias para Mercado Pago y Supabase.

   ```env
   MP_ACCESS_TOKEN=[tu_token_de_mercado_pago]
   NEXT_PUBLIC_SUPABASE_URL: [tu_url_supabase]
   NEXT_PUBLIC_SUPABASE_URL=[tu_url_de_supabase]
   NEXT_PUBLIC_SUPABASE_API_KEY=[tu_clave_api_supabase]
   ```

4. Ejecutá la aplicación:

   ```bash
   npm run dev
   ```

Visitá [http://localhost:3000/](http://localhost:3000/) en tu navegador para ver la aplicación.

## Reconocimientos

- El proyecto fue creado con fines educativos y como un ejercicio práctico para aprender Next.js.