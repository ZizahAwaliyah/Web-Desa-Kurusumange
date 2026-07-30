import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'
import DeleteBeritaButton from '@/components/admin/DeleteBeritaButton'

export default async function AdminBeritaPage() {
  const { data: beritaList } = await supabase
    .from('berita')
    .select('*')
    .order('tanggal_publish', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Kelola Berita</h1>
          <p className="text-gray-500">Tambah, edit, atau hapus berita desa.</p>
        </div>
        <Link
          href="/admin/berita/tambah"
          className="flex items-center gap-2 bg-green-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-900"
        >
          <Plus size={16} /> Tambah Berita
        </Link>
      </div>

      <div className="bg-white border rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-5 py-3 font-medium">Judul</th>
              <th className="px-5 py-3 font-medium w-36">Tanggal</th>
              <th className="px-5 py-3 font-medium w-32">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {beritaList?.map((berita) => (
              <tr key={berita.id} className="border-t">
                <td className="px-5 py-4 font-medium">{berita.judul}</td>
                <td className="px-5 py-4 text-gray-500">
                  {new Date(berita.tanggal_publish).toLocaleDateString('id-ID')}
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/berita/${berita.id}/edit`}
                      className="p-2 border rounded-lg hover:bg-gray-50"
                    >
                      <Pencil size={14} />
                    </Link>
                    <DeleteBeritaButton id={berita.id} gambarUrl={berita.gambar_url} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!beritaList?.length && (
          <p className="text-center text-gray-500 py-10">Belum ada berita.</p>
        )}
      </div>
    </div>
  )
}
