'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { Clock, Download, FileText } from 'lucide-react'
import { anggaranInfo, realisasiProgram, dokumenPublikAnggaran } from '@/data/anggaran'

export default function TransparansiAnggaranSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
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

      {/* Alokasi Dana */}
      <div className="border rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center mb-8">
        <div>
          <h2 className="text-xl font-bold mb-1">Alokasi Dana APBDes {anggaranInfo.tahun}</h2>
          <p className="text-gray-500 text-sm mb-6">Visualisasi sumber dan alokasi dana tahun berjalan.</p>

          <div className="relative h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={anggaranInfo.alokasi}
                  dataKey="persen"
                  nameKey="label"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={2}
                >
                  {anggaranInfo.alokasi.map((entry, i) => (
                    <Cell key={i} fill={entry.warna} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold text-blue-700 mb-1">{anggaranInfo.totalAnggaran}</p>
          <p className="text-gray-500 text-sm mb-6">Total Anggaran</p>

          <div className="space-y-4">
            {anggaranInfo.alokasi.map((item) => (
              <div key={item.label} className="flex items-start justify-between">
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

      {/* Realisasi Program */}
      <div className="border rounded-2xl p-6 md:p-8 mb-8">
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
            <div key={program.nama}>
              <div className="flex justify-between items-start mb-1">
                <div>
                  <p className="font-semibold">{program.nama}</p>
                  <p className="text-gray-500 text-xs">{program.deskripsi}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold" style={{ color: program.persen === 100 ? '#166534' : program.persen >= 70 ? '#1d4ed8' : '#ca8a04' }}>
                    {program.persen}%
                  </p>
                  <p className="text-gray-400 text-xs">Selesai</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                <div className={`h-2 rounded-full ${program.warna}`} style={{ width: `${program.persen}%` }} />
              </div>
              <p className="text-gray-500 text-xs">
                Target: {program.target} &nbsp;&nbsp; Aktual: {program.aktual}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dokumen Publik */}
      <div className="border rounded-2xl overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Dokumen Publik</h2>
          <p className="text-gray-500 text-sm">Unduh dokumen perencanaan dan laporan resmi pemerintah desa.</p>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-6 py-3 font-medium">Nama Dokumen</th>
              <th className="px-6 py-3 font-medium">Tahun</th>
              <th className="px-6 py-3 font-medium">Ukuran</th>
              <th className="px-6 py-3 font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dokumenPublikAnggaran.map((doc) => (
              <tr key={doc.nama} className="border-t">
                <td className="px-6 py-4">
                  <div className="flex items-start gap-2">
                    <FileText size={16} className="text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium">{doc.nama}</p>
                      <p className="text-gray-400 text-xs">{doc.sub}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{doc.tahun}</td>
                <td className="px-6 py-4 text-gray-500">{doc.ukuran}</td>
                <td className="px-6 py-4">
                  <a
                    href={doc.file}
                    download
                    className="flex items-center gap-1.5 border rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-gray-50 w-fit"
                  >
                    <Download size={13} /> Unduh
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
