import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Plus, Pencil, FileText, CheckCircle2 } from 'lucide-react'
import DeleteDokumenButton from '@/components/admin/DeleteDokumenButton'
import EmptyState from '@/components/admin/ui/EmptyState'

const kategoriColor: Record<string, string> = {
  Berkala: 'bg-blue-100 text-blue-700',
  'Setiap Saat': 'bg-purple-100 text-purple-700',
  'Serta Merta': 'bg-orange-100 text-orange-700',
}

export const dynamic = 'force-dynamic'

export default async function AdminPpidPage() {
  const { data } = await supabase
    .from('dokumen_ppid')
    .select('*')
    .order('created_at', { ascending: false })

  const dokumenList = data ?? []

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <h1 className="text-2xl font-bold">Kelola Dokumen PPID</h1>
            <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
              {dokumenList.length} dokumen
            </span>
          </div>
          <p className="text-gray-500">Tambah, edit, atau hapus dokumen informasi publik.</p>
        </div>
        <Link
          href="/admin/ppid/tambah"
          className="flex items-center gap-2 bg-green-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-900"
        >
          <Plus size={16} /> Tambah Dokumen
        </Link>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        {dokumenList.length ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Nama Dokumen</th>
                  <th className="px-5 py-3 font-medium w-36">Kategori</th>
                  <th className="px-5 py-3 font-medium w-20">Tahun</th>
                  <th className="px-5 py-3 font-medium w-28">Anggaran</th>
                  <th className="px-5 py-3 font-medium w-32">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dokumenList.map((doc) => (
                  <tr key={doc.id} className="border-t border-gray-100 hover:bg-gray-50/60">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <FileText size={16} className="text-gray-400 shrink-0" />
                        <span className="font-medium">{doc.nama_dokumen}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          kategoriColor[doc.kategori] || 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {doc.kategori}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-gray-500">{doc.tahun || '-'}</td>
                    <td className="px-5 py-3">
                      {doc.terkait_anggaran ? (
                        <span className="flex items-center gap-1 text-green-700 text-xs font-medium">
                          <CheckCircle2 size={13} /> Ya
                        </span>
                      ) : (
                        <span className="text-gray-400 text-xs">-</span>
                      )}
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/ppid/${doc.id}/edit`}
                          className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
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
          </div>
        ) : (
          <EmptyState
            icon={FileText}
            title="Belum ada dokumen"
            description="Tambahkan dokumen informasi publik pertama untuk kebutuhan PPID desa."
            actionLabel="+ Tambah Dokumen"
            actionHref="/admin/ppid/tambah"
          />
        )}
      </div>
    </div>
  )
}
