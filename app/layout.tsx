import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PixelWise',
  description: 'Generate Fill your Images',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main'>
          <div className='gradient'></div>
          </div>
          {/* TODO: Navbar Section */}
        <main className='app'>
        <Navbar/>
        {children}
        <Footer/>
        </main>
       
        </body>
    </html>
  )
}
