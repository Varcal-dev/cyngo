import type { Product } from "@/lib/shopify"

export function ProductCard({ product }: { product: Product }) {
  const price = new Intl.NumberFormat("es-ES", { style: "currency", currency: product.priceRange.minVariantPrice.currencyCode }).format(Number(product.priceRange.minVariantPrice.amount))
  return (
    <article className="product-card group min-w-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-card">
        {product.featuredImage ? <img className="product-image h-full w-full object-cover" src={product.featuredImage.url} alt={product.featuredImage.altText || product.title} /> : <div className="flex h-full items-center justify-center font-mono text-xs text-muted">CYNGO / PRODUCT</div>}
        <span className="absolute left-3 top-3 bg-accent px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent-foreground">Selección Cyngo</span>
        <button className="absolute bottom-3 right-3 translate-y-2 bg-warm px-3 py-2 text-xs font-bold text-background opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" aria-label={`Añadir ${product.title} al carrito`}>Añadir +</button>
      </div>
      <div className="flex items-start justify-between gap-4 pt-4">
        <div><h3 className="text-sm font-semibold leading-snug text-foreground">{product.title}</h3><p className="mt-1 line-clamp-1 text-xs text-muted">{product.description}</p></div>
        <p className="shrink-0 font-mono text-xs text-warm">{price}</p>
      </div>
    </article>
  )
}
