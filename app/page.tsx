import { SiteHeader } from "@/components/site-header"
import { ProductCard } from "@/components/product-card"
import { getStorefront, type Product } from "@/lib/shopify"

const fallbackProducts: Product[] = []

export default async function Home() {
  let data: Awaited<ReturnType<typeof getStorefront>> | null = null
  try { data = await getStorefront() } catch { data = null }
  const products = data?.products.nodes || fallbackProducts
  const collections = data?.collections.nodes || []
  return <main id="top" className="min-h-screen bg-background">
    <SiteHeader />
    <section className="relative overflow-hidden border-b border-line grid-lines">
      <div className="hero-noise pointer-events-none absolute inset-0" />
      <div className="mx-auto grid min-h-[570px] max-w-[1400px] grid-cols-1 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative flex flex-col justify-end px-5 pb-14 pt-24 lg:px-10 lg:pb-20"><p className="mb-8 font-mono text-[10px] uppercase tracking-[.2em] text-accent">/ Para quienes hacen que suceda</p><h1 className="max-w-3xl text-balance text-[clamp(3.7rem,8vw,8.6rem)] font-extrabold leading-[.88] tracking-[-.075em] text-foreground">Tu setup.<br /><span className="text-muted">Elevado.</span></h1><div className="mt-12 flex max-w-md items-end justify-between gap-8"><p className="text-sm leading-6 text-muted">Equipo elegido para crear, transmitir y construir una presencia que se siente tan bien como se ve.</p><a href="#shop" className="shrink-0 border-b border-accent pb-2 font-mono text-[10px] uppercase tracking-[.12em] text-accent">Explorar tienda ↘</a></div></div>
        <div className="relative min-h-[360px] overflow-hidden bg-[#262a27] lg:min-h-0"><img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=85" alt="Setup de creación de contenido premium" className="h-full w-full object-cover opacity-80 mix-blend-luminosity" /><div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" /><div className="absolute bottom-6 left-6 font-mono text-[10px] uppercase tracking-[.16em] text-warm">CYNGO / STUDIO 001</div></div>
      </div>
    </section>
    <section className="mx-auto max-w-[1400px] px-5 py-16 lg:px-10" id="shop"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="mb-3 font-mono text-[10px] uppercase tracking-[.18em] text-accent">01 / Curado para ti</p><h2 className="text-3xl font-bold tracking-[-.05em] text-foreground lg:text-5xl">Empieza por aquí.</h2></div><a href="#shop" className="hidden font-mono text-[10px] uppercase tracking-[.14em] text-muted underline underline-offset-4 hover:text-foreground sm:block">Ver todo →</a></div><div className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-x-5">{products.length ? products.slice(0, 4).map(product => <ProductCard key={product.id} product={product} />) : <div className="col-span-full border border-line py-20 text-center font-mono text-xs text-muted">El catálogo se está preparando.</div>}</div></section>
    <section className="border-y border-line bg-card"><div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">{[['01','Envío rápido','Recibe tu equipo sin esperas.'],['02','Selección experta','Solo lo que realmente funciona.'],['03','Compra segura','Tu pedido, protegido de principio a fin.'],['04','Soporte humano','Estamos aquí cuando lo necesitas.']].map(([num,title,text]) => <div key={num} className="border-r border-line px-5 py-8 last:border-r-0 lg:px-10"><p className="mb-7 font-mono text-[10px] text-accent">{num}</p><h3 className="mb-2 text-sm font-bold text-foreground">{title}</h3><p className="text-xs leading-5 text-muted">{text}</p></div>)}</div></section>
    <section className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10"><div className="flex flex-col justify-between gap-10 border-b border-line pb-16 md:flex-row md:items-end"><div><p className="mb-5 font-mono text-[10px] uppercase tracking-[.18em] text-accent">02 / La señal</p><h2 className="max-w-2xl text-4xl font-bold leading-[.95] tracking-[-.06em] lg:text-7xl">No necesitas<br /><span className="text-muted">más ruido.</span></h2></div><p className="max-w-xs text-sm leading-6 text-muted">Un espacio para las herramientas que te ayudan a hacer mejor trabajo. Sin promesas vacías. Sin accesorios de más.</p></div></section>
    <footer className="border-t border-line"><div className="mx-auto flex max-w-[1400px] flex-col gap-10 px-5 py-10 md:flex-row md:items-end md:justify-between lg:px-10"><div><p className="font-mono text-lg tracking-[-.08em]">CYNGO<span className="text-accent">.</span></p><p className="mt-3 font-mono text-[10px] uppercase tracking-[.14em] text-muted">Tools for the signal</p></div><div className="flex gap-6 font-mono text-[10px] uppercase tracking-[.13em] text-muted"><a href="#top" className="hover:text-foreground">Instagram</a><a href="#top" className="hover:text-foreground">Contacto</a><a href="#top" className="hover:text-foreground">Legal</a></div><p className="font-mono text-[10px] text-muted">© 2026 Cyngo</p></div></footer>
  </main>
}
