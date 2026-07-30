import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'
import DeleteDokumenButton from '@/components/admin/DeleteDokumenButton'

export default async function AdminPpidPage() {
  const { data: dokumenList } = await supabase
    .from('dokumen_ppid')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Kelola Dokumen PPID</h1>
          <p className="text-gray-500">Tambah, edit, atau hapus dokumen informasi publik.</p>
        </div>
        <Link
          href="/admin/ppid/tambah"
          className="flex items-center gap-2 bg-green-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-900"
        >
          <Plus size={16} /> Tambah Dokumen
        </Link>
      </div>

      <div className="bg-white border rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-5 py-3 font-medium">Nama Dokumen</th>
              <th className="px-5 py-3 font-medium w-32">Kategori</th>
              <th className="px-5 py-3 font-medium w-20">Tahun</th>
              <th className="px-5 py-3 font-medium w-28">Anggaran</th>
              <th className="px-5 py-3 font-medium w-32">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dokumenList?.map((doc) => (
              <tr key={doc.id} className="border-t">
                <td className="px-5 py-4 font-medium">{doc.nama_dokumen}</td>
                <td className="px-5 py-4">
                  <span className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full">
                    {doc.kategori}
                  </span>
                </td>
                <td className="px-5 py-4 text-gray-500">{doc.tahun || '-'}</td>
                <td className="px-5 py-4">
                  {doc.terkait_anggaran ? (
                    <span className="text-green-700 text-xs font-medium">✓ Ya</span>
                  ) : (
                    <span className="text-gray-400 text-xs">-</span>
                  )}
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <Link
                      href={`/admin/ppid/${doc.id}/edit`}
                      className="p-2 border rounded-lg hover:bg-gray-50"
                    >
                      <Pencil size={14} />
                    </Link>
                    <DeleteDokumenButton id={doc.id} fileUrl={doc.file_url} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!dokumenList?.length && (
          <p className="text-center text-gray-500 py-10">Belum ada dokumen.</p>
        )}
      </div>
    </div>
  )
}