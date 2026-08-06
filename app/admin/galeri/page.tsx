import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Plus, Pencil, Images } from 'lucide-react'
import DeleteGaleriButton from '@/components/admin/DeleteGaleriButton'
import EmptyState from '@/components/admin/ui/EmptyState'

export default async function AdminGaleriPage() {
  const { data } = await supabase
    .from('galeri')
    .select('*')
    .order('created_at', { ascending: false })

  const galeriList = data ?? []

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <h1 className="text-2xl font-bold">Kelola Galeri</h1>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
              {galeriList.length} foto
            </span>
          </div>
          <p className="text-gray-500">Tambah, edit, atau hapus foto galeri desa.</p>
        </div>
        <Link
          href="/admin/galeri/tambah"
          className="flex items-center gap-2 bg-green-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-900"
        >
          <Plus size={16} /> Tambah Foto
        </Link>
      </div>

      {galeriList.length ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {galeriList.map((foto) => (
            <div
              key={foto.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img src={foto.gambar_url} alt={foto.judul} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <Link
                    href={`/admin/galeri/${foto.id}/edit`}
                    className="bg-white p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Pencil size={14} />
                  </Link>
                  <DeleteGaleriButton id={foto.id} gambarUrl={foto.gambar_url} />
                </div>
              </div>
              <div className="p-4">
                <p className="font-semibold text-sm mb-1 line-clamp-1">{foto.judul}</p>
                {foto.kategori ? (
                  <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                    {foto.kategori}
                  </span>
                ) : (
                  <span className="text-xs text-gray-300">Tanpa kategori</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white border rounded-2xl shadow-sm">
          <EmptyState
            icon={Images}
            title="Belum ada foto galeri"
            description="Tambahkan foto pertama untuk ditampilkan di galeri desa."
            actionLabel="+ Tambah Foto"
            actionHref="/admin/galeri/tambah"
          />
        </div>
      )}
    </div>
  )
}
