import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cyngo — Creator gear, elevated",
  description: "Equipo premium para streaming, creación de contenido y tu setup.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="bg-background">
      <body>{children}</body>
    </html>
  )
}
