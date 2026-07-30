'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LayoutDashboard, Newspaper, FileText, LogOut, Images } from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Kelola Berita', href: '/admin/berita', icon: Newspaper },
  { label: 'Kelola Dokumen PPID', href: '/admin/ppid', icon: FileText },
  { label: 'Kelola Galeri', href: '/admin/galeri', icon: Images },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="w-64 bg-green-950 text-white min-h-screen flex flex-col">
      <div className="p-6 border-b border-white/10">
        <p className="font-bold text-lg">Desa Kurusumange</p>
        <p className="text-white/50 text-xs">Panel Admin</p>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                isActive ? 'bg-green-800 font-medium' : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-white/70 hover:bg-white/5 hover:text-white w-full"
        >
          <LogOut size={18} />
          Keluar
        </button>
      </div>
    </aside>
  )
}
