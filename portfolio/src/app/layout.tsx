import './globals.css'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], // choose the weights you actually need
  style: ['normal', 'italic'], // optional
})

export const metadata = {
  title: 'Shoyeb Ansari - Portfolio',
  description: 'Aspiring Data Scientist passionate about mathematics, competitive programming, and web development.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
