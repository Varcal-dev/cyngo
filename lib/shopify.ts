const endpoint = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2026-01/graphql.json`
const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!process.env.SHOPIFY_STORE_DOMAIN || !token) throw new Error("Shopify no está configurado")
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Shopify-Storefront-Access-Token": token },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  })
  if (!response.ok) throw new Error("No se pudo conectar con Shopify")
  const payload = await response.json()
  if (payload.errors?.length) throw new Error(payload.errors[0].message)
  return payload.data
}

export type Product = {
  id: string; title: string; handle: string; description: string
  featuredImage?: { url: string; altText?: string; width: number; height: number }
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } }
  variants: { nodes: { id: string; title: string; availableForSale: boolean }[] }
}

export async function getStorefront() {
  const query = `query Storefront { products(first: 8, sortKey: BEST_SELLING) { nodes { id title handle description featuredImage { url altText width height } priceRange { minVariantPrice { amount currencyCode } } variants(first: 1) { nodes { id title availableForSale } } } } collections(first: 6) { nodes { id title handle image { url altText width height } } } }`
  return shopifyFetch<{ products: { nodes: Product[] }; collections: { nodes: { id: string; title: string; handle: string; image?: { url: string; altText?: string } }[] } }>(query)
}
