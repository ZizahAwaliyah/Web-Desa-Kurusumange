import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'
import DeleteGaleriButton from '@/components/admin/DeleteGaleriButton'

export default async function AdminGaleriPage() {
  const { data: galeriList } = await supabase
    .from('galeri')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Kelola Galeri</h1>
          <p className="text-gray-500">Tambah, edit, atau hapus foto galeri desa.</p>
        </div>
        <Link
          href="/admin/galeri/tambah"
          className="flex items-center gap-2 bg-green-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-900"
        >
          <Plus size={16} /> Tambah Foto
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {galeriList?.map((foto) => (
          <div key={foto.id} className="bg-white border rounded-2xl overflow-hidden">
            <img src={foto.gambar_url} alt={foto.judul} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="font-semibold text-sm mb-1 line-clamp-1">{foto.judul}</p>
              {foto.kategori && (
                <span className="text-xs text-gray-500">{foto.kategori}</span>
              )}
              <div className="flex gap-2 mt-3">
                <Link
                  href={`/admin/galeri/${foto.id}/edit`}
                  className="flex-1 flex items-center justify-center gap-1 p-2 border rounded-lg hover:bg-gray-50 text-xs"
                >
                  <Pencil size={13} /> Edit
                </Link>
                <DeleteGaleriButton id={foto.id} gambarUrl={foto.gambar_url} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {!galeriList?.length && (
        <p className="text-center text-gray-500 py-10">Belum ada foto galeri.</p>
      )}
    </div>
  )
}
