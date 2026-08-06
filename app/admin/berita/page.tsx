import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Plus, Pencil, Newspaper } from 'lucide-react'
import DeleteBeritaButton from '@/components/admin/DeleteBeritaButton'
import EmptyState from '@/components/admin/ui/EmptyState'

export const dynamic = 'force-dynamic'

export default async function AdminBeritaPage() {
  const { data } = await supabase
    .from('berita')
    .select('*')
    .order('tanggal_publish', { ascending: false })

  const beritaList = data ?? []

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <h1 className="text-2xl font-bold">Kelola Berita</h1>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
              {beritaList.length} berita
            </span>
          </div>
          <p className="text-gray-500">Tambah, edit, atau hapus berita desa.</p>
        </div>
        <Link
          href="/admin/berita/tambah"
          className="flex items-center gap-2 bg-green-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-900"
        >
          <Plus size={16} /> Tambah Berita
        </Link>
      </div>

      <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">
        {beritaList.length ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Berita</th>
                  <th className="px-5 py-3 font-medium w-36">Tanggal</th>
                  <th className="px-5 py-3 font-medium w-32">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {beritaList.map((berita) => (
                  <tr key={berita.id} className="border-t border-gray-100 hover:bg-gray-50/60">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        {berita.gambar_url ? (
                          <img
                            src={berita.gambar_url}
                            alt={berita.judul}
                            className="w-12 h-12 rounded-lg object-cover shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-gray-100 text-gray-300 flex items-center justify-center shrink-0">
                            <Newspaper size={18} />
                          </div>
                        )}
                        <span className="font-medium line-clamp-2">{berita.judul}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-gray-500 whitespace-nowrap">
                      {new Date(berita.tanggal_publish).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/berita/${berita.id}/edit`}
                          className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
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
          </div>
        ) : (
          <EmptyState
            icon={Newspaper}
            title="Belum ada berita"
            description="Mulai publikasikan berita pertama untuk warga desa."
            actionLabel="+ Tambah Berita"
            actionHref="/admin/berita/tambah"
          />
        )}
      </div>
    </div>
  )
}
