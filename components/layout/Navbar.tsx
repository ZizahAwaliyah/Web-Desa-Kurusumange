'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
  {
  label: 'PPID',
  href: '/ppid',
  dropdown: [
    { label: 'Profil PPID', href: '/ppid/profil' },
    { label: 'Struktur Organisasi', href: '/ppid/struktur-organisasi' },
    { label: 'Daftar Informasi', href: '/ppid/daftar-informasi' },
    { label: 'Alur Permohonan Informasi', href: '/ppid/alur-permohonan' },
  ],
},
  {
    label: 'Transparansi',
    href: '/transparansi-anggaran',
    dropdown: [
      { label: 'Anggaran', href: '/transparansi-anggaran' },
      { label: 'Realisasi Program', href: '/transparansi-anggaran#realisasi' },
    ],
  },
  { label: 'Berita', href: '/berita' },
]

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="border-b border-black bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo maros.png" alt="Logo Desa Kurusumange" className="h-10 w-10" />
          <span className="font-bold text-lg text-green-900">Desa Kurusumange</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <Link href={item.href} className="flex items-center gap-1 text-gray-800 hover:text-green-800">
                {item.label}
                {item.dropdown && <ChevronDown size={16} />}
              </Link>

              {item.dropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white border rounded-lg shadow-lg py-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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

        <Link
          href="/admin/login"
          className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600"
        >
          Login Admin
        </Link>
      </div>
    </header>
  )
}