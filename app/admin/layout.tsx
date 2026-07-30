'use client'

import { usePathname } from 'next/navigation'
import AdminSidebar from '@/components/admin/AdminSidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 bg-gray-50 min-h-screen p-8">{children}</main>
    </div>
  )
}
