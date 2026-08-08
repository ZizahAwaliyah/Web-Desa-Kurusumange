import { Clock, Download, FileText } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { anggaranInfo, realisasiProgram } from '@/data/anggaran'
import AlokasiChart from '@/components/anggaran/AlokasiChart'

export default async function TransparansiAnggaranSection() {
  const { data: dokumenAnggaran } = await supabase
    .from('dokumen_ppid')
    .select('*')
    .eq('terkait_anggaran', true)
    .order('tahun', { ascending: false })

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          APBDes {anggaranInfo.tahun}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          APBDes Tahun Anggaran {anggaranInfo.tahun}
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Akses terbuka data keuangan, realisasi pembangunan, dan dokumen publik Desa Kurusumange untuk mewujudkan tata kelola yang akuntabel.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div>
          <h2 className="text-xl font-bold mb-1">Alokasi Dana APBDes {anggaranInfo.tahun}</h2>
          <p className="text-gray-500 text-sm mb-6">Visualisasi sumber dan alokasi dana tahun berjalan.</p>
          <AlokasiChart />
        </div>

        <div>
          <p className="text-2xl font-bold text-blue-700 mb-1">{anggaranInfo.totalAnggaran}</p>
          <p className="text-gray-500 text-sm mb-6">Total Anggaran</p>

          <div className="space-y-4">
            {anggaranInfo.alokasi.map((item) => (
              <div key={item.label} className="flex items-start justify-between bg-gray-50 rounded-xl p-3">
                <div className="flex items-start gap-2">
                  <span className="w-3 h-3 rounded-sm mt-1" style={{ backgroundColor: item.warna }} />
                  <div>
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs">{item.sub}</p>
                  </div>
                </div>
                <span className="font-bold text-sm">{item.persen}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-bold">Realisasi Program Pembangunan</h2>
            <p className="text-gray-500 text-sm">Pemantauan progres fisik dan anggaran proyek desa.</p>
          </div>
          <span className="flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full">
            <Clock size={13} /> Update Terakhir: 15 Okt {anggaranInfo.tahun - 2}
          </span>
        </div>

        <div className="space-y-6">
          {realisasiProgram.map((program) => (
            <div key={program.nama} className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <p className="font-semibold">{program.nama}</p>
                </div>
                <div className="text-right">
                  <p
                    className="font-bold"
                    style={{
                      color:
                        program.persen === 100
                          ? '#166534'
                          : program.persen >= 70
                          ? '#1d4ed8'
                          : '#ca8a04',
                    }}
                  >
                    {program.persen}%
                  </p>
                  <p className="text-gray-400 text-xs">Selesai</p>
                </div>
              </div>
              <div className="w-full bg-white rounded-full h-2 mb-2 mt-3">
                <div className={`h-2 rounded-full ${program.warna}`} style={{ width: `${program.persen}%` }} />
              </div>
              <p className="text-gray-500 text-xs">
                Aktual: {program.aktual}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold">Dokumen Publik</h2>
          <p className="text-gray-500 text-sm">Unduh dokumen perencanaan dan laporan resmi pemerintah desa.</p>
        </div>

        {dokumenAnggaran && dokumenAnggaran.length > 0 ? (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-gray-500">
              <tr>
                <th className="px-6 py-3 font-medium">Nama Dokumen</th>
                <th className="px-6 py-3 font-medium">Tahun</th>
                <th className="px-6 py-3 font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dokumenAnggaran.map((doc) => (
                <tr key={doc.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-start gap-2">
                      <FileText size={16} className="text-red-500 mt-0.5" />
                      <p className="font-medium">{doc.nama_dokumen}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{doc.tahun || '-'}</td>
                  <td className="px-6 py-4">
                    {doc.file_url ? (
                      <a
                        href={doc.file_url}
                        download
                        className="flex items-center gap-1.5 bg-green-800 text-white rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-green-900 transition-colors w-fit"
                      >
                        <Download size={13} /> Unduh
                      </a>
                    ) : (
                      <span className="text-gray-500 text-xs">Tidak ada file</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 py-10">Belum ada dokumen terkait anggaran.</p>
        )}
      </div>
    </div>
  )
}