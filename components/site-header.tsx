"use client"

import { useState } from "react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="relative z-10 border-b border-line bg-background/95 backdrop-blur-sm">
    <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 lg:px-10">
      <a href="#top" className="font-mono text-lg font-medium tracking-[-.08em]">CYNGO<span className="text-accent">.</span></a>
      <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[.14em] text-muted md:flex">
        {['Streaming','Audio','Iluminación','Cámaras','Escritorio'].map(item => <a key={item} href="#shop" className="underline-link hover:text-foreground">{item}</a>)}
      </nav>
      <div className="flex items-center gap-5"><button className="font-mono text-[10px] uppercase tracking-[.14em] text-muted hover:text-foreground" onClick={() => setOpen(!open)}>Buscar</button><button className="font-mono text-[10px] uppercase tracking-[.14em] text-foreground" onClick={() => setOpen(!open)}>Bolsa <span className="text-accent">(0)</span></button><button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú"><span className="block h-px w-5 bg-foreground" /><span className="mt-1.5 block h-px w-5 bg-foreground" /></button></div>
    </div>
    {open && <div className="border-t border-line px-5 py-5 md:hidden"><div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[.14em] text-muted">{['Streaming','Audio','Iluminación','Cámaras','Escritorio','Accesorios'].map(item => <a key={item} href="#shop" onClick={() => setOpen(false)}>{item}</a>)}</div></div>}
  </header>
}
