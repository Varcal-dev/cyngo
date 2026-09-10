# Cyngo Storefront

Frontend headless en Next.js conectado a Shopify vía Storefront API.

## Setup local

```bash
npm install
cp .env.local.example .env.local
# edita .env.local con tu SHOPIFY_STORE_DOMAIN y un SHOPIFY_STOREFRONT_TOKEN nuevo
npm run dev
```

Abre http://localhost:3000

## Cómo funciona

- `lib/shopify.ts` — todas las llamadas a la Storefront API (productos, checkout)
- `app/page.tsx` — home con grid de productos (server component, corre en el servidor)
- `app/product/[handle]/page.tsx` — página de producto individual
- `app/api/checkout/route.ts` — crea el carrito/checkout en Shopify sin exponer el token al navegador
- `components/BuyButton.tsx` — botón de compra (client component), redirige al checkout hosteado de Shopify

El pago (tarjeta, PayPal) ocurre en el checkout hosteado de Shopify, no en este código — así te ahorras cumplimiento PCI y la complejidad de un checkout custom.

## Deploy a Vercel

1. Sube este proyecto a un repo de GitHub
2. Conecta el repo en vercel.com/new (o pídeme que lo haga vía el conector de Vercel)
3. En la configuración del proyecto en Vercel, agrega las mismas variables de `.env.local` como Environment Variables
4. Deploy
5. Conecta cyngo.online al proyecto de Vercel (Settings → Domains)

## Antes de producción

- [ ] Reemplaza el Storefront token (el que compartiste antes quedó expuesto, ya debería estar revocado)
- [ ] Agrega manejo de imágenes con `next/image` en vez de `<img>` para mejor performance
- [ ] Agrega página 404 y loading states
- [ ] Agrega metadata dinámica por producto (SEO)
