import { supabase } from '@/lib/supabase'
import { Download, Eye, FileText } from 'lucide-react'
import Link from 'next/link'

const kategoriTabs = ['Semua', 'Berkala', 'Setiap Saat', 'Serta Merta']

export default async function DaftarInformasiPage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>
}) {
  const params = await searchParams
  const activeKategori = params.kategori || 'Semua'

  let query = supabase
    .from('dokumen_ppid')
    .select('*')
    .order('created_at', { ascending: false })

  if (activeKategori !== 'Semua') {
    query = query.eq('kategori', activeKategori)
  }

  const { data: dokumen } = await query

  return (
    <div>
      <section className="relative h-72 flex items-center justify-center text-center">
        <img
          src="/ppidlisthero.jpg"
          alt="Jenis Informasi Publik"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Jenis Informasi Publik</h1>
          <p className="text-white/90 max-w-xl mx-auto">
            Komitmen kami terhadap transparansi dan keterbukaan informasi publik untuk masyarakat Desa Kurusumange yang lebih cerdas dan berdaya.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 relative inline-block">
          Daftar Dokumen Informasi Publik
          <span className="block w-14 h-1 bg-green-800 rounded-full mt-2" />
        </h2>

        <div className="flex gap-6 border-b border-gray-100 mb-6 mt-6">
          {kategoriTabs.map((kategori) => {
            const isActive = activeKategori === kategori
            const href = kategori === 'Semua' ? '/ppid/daftar-informasi' : `/ppid/daftar-informasi?kategori=${encodeURIComponent(kategori)}`
            return (
              <Link
                key={kategori}
                href={href}
                className={`pb-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  isActive ? 'border-green-700 text-green-800' : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {kategori}
              </Link>
            )
          })}
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-5 py-3 font-medium w-14">No</th>
                <th className="px-5 py-3 font-medium">Nama Dokumen</th>
                <th className="px-5 py-3 font-medium w-24">Tahun</th>
                <th className="px-5 py-3 font-medium w-52">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dokumen?.map((doc, i) => (
                <tr key={doc.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 text-gray-500">{i + 1}</td>
                  <td className="px-5 py-4 font-medium flex items-center gap-2">
                    <FileText size={16} className="text-gray-400" />
                    {doc.nama_dokumen}
                  </td>
                  <td className="px-5 py-4 text-gray-500">{doc.tahun || '-'}</td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <a href={doc.file_url} download className="flex items-center gap-1.5 bg-green-800 text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-green-900">
                        <Download size={13} /> Unduh
                      </a>
                      <a href={doc.file_url} target="_blank" className="flex items-center gap-1.5 bg-green-800 text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-green-900">
                        <Eye size={13} /> Lihat
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!dokumen?.length && (
            <p className="text-center text-gray-500 py-10">Belum ada dokumen untuk kategori ini.</p>
          )}
        </div>
      </div>
    </div>
  )
}
