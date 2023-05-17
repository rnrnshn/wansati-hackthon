import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-pt" className="scroll-smooth">
      <head />
      <body>{children}</body>
    </html>
  )
}
