import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bassline - Drum and Bass Events',
  description: 'Discover the best drum and bass events in your city',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#141217] text-[#ffffff]`}>
        {children}
      </body>
    </html>
  )
}

