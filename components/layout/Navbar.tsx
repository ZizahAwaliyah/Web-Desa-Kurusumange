'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, UserRound, Menu, X } from 'lucide-react'

const menuItems = [
  {
    label: 'Profil',
    href: '/profil',
    dropdown: [
      { label: 'Profil Desa', href: '/profil' },
      { label: 'Struktur Organisasi', href: '/profil/struktur-organisasi' },
    ],
  },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Infografik', href: '/infografik' },
  { label: 'Potensi', href: '/potensi-desa' },
  { label: 'Galeri', href: '/galeri' },
  {
    label: 'PPID',
    href: '/ppid/daftar-informasi',
    dropdown: [
      { label: 'Profil PPID', href: '/ppid/profil' },
      { label: 'Struktur Organisasi', href: '/ppid/struktur-organisasi' },
      { label: 'Alur Permohonan Informasi', href: '/ppid/alur-permohonan' },
      { label: 'Daftar Dokumen', href: '/ppid/daftar-informasi' },
    ],
  },
  {
    label: 'Transparansi',
    href: '/transparansi-anggaran',
    dropdown: [
      { label: 'Anggaran', href: '/transparansi-anggaran' },
      { label: 'Realisasi Program', href: '/transparansi-anggaran/realisasi' },
    ],
  },
  { label: 'Berita', href: '/berita' },
]

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo maros.png" alt="Logo Desa Kurusumange" className="h-9 w-9 md:h-10 md:w-10" />
          <span className="font-bold text-base md:text-lg text-green-900">Desa Kurusumange</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 text-gray-700 font-medium hover:text-green-800 transition-colors"
              >
                {item.label}
                {item.dropdown && <ChevronDown size={16} />}
              </Link>

              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-3 w-64 z-50">
                  <div className="bg-white rounded-xl shadow-lg py-2 overflow-hidden">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/login"
            className="hidden sm:flex items-center gap-2 bg-green-800 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-green-900 transition-colors text-sm"
          >
            <UserRound size={16} />
            Admin
          </Link>

          {/* Tombol Hamburger, cuma muncul di mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700 p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (Dropdown Penuh) */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white max-h-[75vh] overflow-y-auto">
          <nav className="px-4 py-3">
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-gray-50 last:border-0">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between py-3 text-gray-700 font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pb-2 pl-4 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm text-gray-600 hover:text-green-800"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-gray-700 font-medium hover:text-green-800"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <Link
              href="/admin/login"
              onClick={() => setMobileOpen(false)}
              className="sm:hidden flex items-center justify-center gap-2 bg-green-800 text-white font-semibold px-5 py-2.5 rounded-lg mt-4 text-sm"
            >
              <UserRound size={16} />
              Admin
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}