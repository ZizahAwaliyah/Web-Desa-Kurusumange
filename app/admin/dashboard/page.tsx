import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Newspaper, FileText, Images, Plus } from 'lucide-react'
import StatCard from '@/components/admin/ui/StatCard'

export default async function DashboardPage() {
  const { count: totalBerita } = await supabase
    .from('berita')
    .select('*', { count: 'exact', head: true })

  const { count: totalDokumen } = await supabase
    .from('dokumen_ppid')
    .select('*', { count: 'exact', head: true })

  const { count: totalGaleri } = await supabase
    .from('galeri')
    .select('*', { count: 'exact', head: true })

  const quickActions = [
    { label: 'Tambah Berita', href: '/admin/berita/tambah' },
    { label: 'Tambah Dokumen PPID', href: '/admin/ppid/tambah' },
    { label: 'Tambah Foto Galeri', href: '/admin/galeri/tambah' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-gray-500 mb-8">Selamat datang di panel admin Desa Kurusumange.</p>

      <div className="grid sm:grid-cols-3 gap-5 mb-8">
        <StatCard
          icon={Newspaper}
          value={totalBerita || 0}
          label="Total Berita Dipublikasikan"
          color="green"
          href="/admin/berita"
          linkLabel="Kelola Berita"
        />
        <StatCard
          icon={FileText}
          value={totalDokumen || 0}
          label="Total Dokumen PPID"
          color="blue"
          href="/admin/ppid"
          linkLabel="Kelola Dokumen"
        />
        <StatCard
          icon={Images}
          value={totalGaleri || 0}
          label="Total Foto Galeri"
          color="yellow"
          href="/admin/galeri"
          linkLabel="Kelola Galeri"
        />
      </div>

      <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <p className="font-semibold text-sm mb-4">Aksi Cepat</p>
        <div className="flex flex-wrap gap-3">
          {quickActions.map((action) => (
            <Link
  key={action.href}
  href={action.href}
  className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
>
              <Plus size={15} className="text-green-800" />
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
