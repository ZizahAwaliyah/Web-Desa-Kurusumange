'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import AdminSidebar from '@/components/admin/AdminSidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div className="flex">
      <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 min-w-0">
        {/* Header mobile, cuma muncul di layar kecil */}
        <div className="md:hidden flex items-center gap-3 bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-30">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-700">
            <Menu size={22} />
          </button>
          <p className="font-bold text-sm">Panel Admin</p>
        </div>

        <main className="bg-gray-50 min-h-screen p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
