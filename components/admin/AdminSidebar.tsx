'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LayoutDashboard, Newspaper, FileText, Images, LogOut, X } from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Kelola Berita', href: '/admin/berita', icon: Newspaper },
  { label: 'Kelola Dokumen PPID', href: '/admin/ppid', icon: FileText },
  { label: 'Kelola Galeri', href: '/admin/galeri', icon: Images },
]

export default function AdminSidebar({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <>
      {/* Overlay gelap, cuma muncul di mobile saat sidebar terbuka */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-green-950 text-white flex flex-col z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <p className="font-bold text-lg">Desa Kurusumange</p>
            <p className="text-white/50 text-xs">Panel Admin</p>
          </div>
          <button onClick={onClose} className="md:hidden text-white/70 hover:text-white">
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
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
    </>
  )
}
