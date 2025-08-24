import './globals.css'

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  )
}