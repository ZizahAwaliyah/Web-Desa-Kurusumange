'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactSection from '@/components/sections/ContactSection'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  return (
    <html lang="id">
      <body>
        {!isAdminRoute && <Navbar />}
        <main>{children}</main>
        {!isAdminRoute && <ContactSection />}
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  )
}