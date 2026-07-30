import { supabase } from '@/lib/supabase'
import { Newspaper, FileText, Images } from 'lucide-react'

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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
      <p className="text-gray-500 mb-8">Selamat datang di panel admin Desa Kurusumange.</p>

      <div className="grid sm:grid-cols-3 gap-5">
        <div className="bg-white border rounded-2xl p-6">
          <div className="bg-green-100 text-green-700 w-11 h-11 rounded-xl flex items-center justify-center mb-4">
            <Newspaper size={20} />
          </div>
          <p className="text-3xl font-bold mb-1">{totalBerita || 0}</p>
          <p className="text-gray-500 text-sm">Total Berita Dipublikasikan</p>
        </div>

        <div className="bg-white border rounded-2xl p-6">
          <div className="bg-blue-100 text-blue-700 w-11 h-11 rounded-xl flex items-center justify-center mb-4">
            <FileText size={20} />
          </div>
          <p className="text-3xl font-bold mb-1">{totalDokumen || 0}</p>
          <p className="text-gray-500 text-sm">Total Dokumen PPID</p>
        </div>

        <div className="bg-white border rounded-2xl p-6">
          <div className="bg-yellow-100 text-yellow-700 w-11 h-11 rounded-xl flex items-center justify-center mb-4">
            <Images size={20} />
          </div>
          <p className="text-3xl font-bold mb-1">{totalGaleri || 0}</p>
          <p className="text-gray-500 text-sm">Total Foto Galeri</p>
        </div>
      </div>
    </div>
  )
}
