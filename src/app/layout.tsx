import './globals.css'

export const metadata = {
  title: 'Elysium',
  description: 'Contact Center Solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-zinc-50">{children}</body>
    </html>
  )
}
