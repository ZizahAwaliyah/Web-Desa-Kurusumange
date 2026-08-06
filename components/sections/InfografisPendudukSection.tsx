'use client'

import { Users, Home, TrendingUp } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { statistikPenduduk, dataPerDusun } from '@/data/statistik-penduduk'

const persenLaki = ((statistikPenduduk.lakiLaki / statistikPenduduk.totalPenduduk) * 100).toFixed(1)
const persenPerempuan = ((statistikPenduduk.perempuan / statistikPenduduk.totalPenduduk) * 100).toFixed(1)

const pieData = [
  { name: 'Laki-laki', value: statistikPenduduk.lakiLaki, color: '#166534' },
  { name: 'Perempuan', value: statistikPenduduk.perempuan, color: '#1d4ed8' },
]

export default function InfografisPendudukSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
        DATA DEMOGRAFI {statistikPenduduk.tahunData}
      </span>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        Infografis Kependudukan: Total Keseluruhan
      </h1>

      {/* Card Ringkasan */}
      <div className="grid sm:grid-cols-2 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 text-green-700 w-11 h-11 rounded-xl flex items-center justify-center">
              <Users size={20} />
            </div>
            <span className="flex items-center gap-1 text-green-600 text-xs font-semibold">
              <TrendingUp size={12} /> Data Terkini
            </span>
          </div>
          <p className="text-3xl font-bold mb-1">{statistikPenduduk.totalPenduduk.toLocaleString('id-ID')}</p>
          <p className="text-gray-500 text-sm">Total Penduduk (Jiwa)</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 text-blue-700 w-11 h-11 rounded-xl flex items-center justify-center">
              <Home size={20} />
            </div>
            <span className="text-gray-400 text-xs font-semibold">
              Tersebar di {statistikPenduduk.jumlahDusun} Dusun
            </span>
          </div>
          <p className="text-3xl font-bold mb-1">{statistikPenduduk.jumlahKK.toLocaleString('id-ID')}</p>
          <p className="text-gray-500 text-sm">Jumlah Kepala Keluarga</p>
        </div>
      </div>

      {/* Pie Chart + Penjelasan */}
      <div className="bg-white rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center mb-10 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div>
          <h2 className="text-xl font-bold mb-2">Distribusi Jenis Kelamin</h2>
          <p className="text-gray-600 text-sm mb-6">
            Persentase penduduk berdasarkan jenis kelamin untuk perencanaan program yang tepat sasaran.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-800" />
                <span className="text-sm font-medium">Laki-laki</span>
              </div>
              <div className="text-right">
                <p className="font-bold">{persenLaki}%</p>
                <p className="text-xs text-gray-500">{statistikPenduduk.lakiLaki.toLocaleString('id-ID')} Jiwa</p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-700" />
                <span className="text-sm font-medium">Perempuan</span>
              </div>
              <div className="text-right">
                <p className="font-bold">{persenPerempuan}%</p>
                <p className="text-xs text-gray-500">{statistikPenduduk.perempuan.toLocaleString('id-ID')} Jiwa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-72 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={2}
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute text-center">
            <p className="text-2xl font-bold">100%</p>
            <p className="text-xs text-gray-500">Populasi</p>
          </div>
        </div>
      </div>

      {/* Info Wilayah */}
      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
          <p className="text-2xl font-bold">{statistikPenduduk.luasWilayah}</p>
          <p className="text-gray-500 text-sm">Luas Wilayah</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
          <p className="text-2xl font-bold">{statistikPenduduk.jumlahDusun}</p>
          <p className="text-gray-500 text-sm">Jumlah Dusun</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 text-center shadow-sm">
          <p className="text-2xl font-bold">
            {Math.round(statistikPenduduk.totalPenduduk / statistikPenduduk.jumlahKK)}
          </p>
          <p className="text-gray-500 text-sm">Rata-rata Jiwa/KK</p>
        </div>
      </div>

      {/* Tabel Per Dusun */}
      <h2 className="text-xl font-bold mb-4">Jumlah Penduduk per Dusun</h2>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left text-gray-500">
            <tr>
              <th className="px-5 py-3 font-medium">Dusun</th>
              <th className="px-5 py-3 font-medium text-right">Laki-laki</th>
              <th className="px-5 py-3 font-medium text-right">Perempuan</th>
              <th className="px-5 py-3 font-medium text-right">Total</th>
              <th className="px-5 py-3 font-medium text-right">KK</th>
            </tr>
          </thead>
          <tbody>
            {dataPerDusun.map((d) => (
              <tr key={d.dusun} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="px-5 py-3 font-medium">{d.dusun}</td>
                <td className="px-5 py-3 text-right">{d.lakiLaki.toLocaleString('id-ID')}</td>
                <td className="px-5 py-3 text-right">{d.perempuan.toLocaleString('id-ID')}</td>
                <td className="px-5 py-3 text-right font-semibold">{d.total.toLocaleString('id-ID')}</td>
                <td className="px-5 py-3 text-right">{d.kk.toLocaleString('id-ID')}</td>
              </tr>
            ))}
            <tr className="border-t border-gray-100 bg-gray-50 font-bold">
              <td className="px-5 py-3">Jumlah</td>
              <td className="px-5 py-3 text-right">{statistikPenduduk.lakiLaki.toLocaleString('id-ID')}</td>
              <td className="px-5 py-3 text-right">{statistikPenduduk.perempuan.toLocaleString('id-ID')}</td>
              <td className="px-5 py-3 text-right">{statistikPenduduk.totalPenduduk.toLocaleString('id-ID')}</td>
              <td className="px-5 py-3 text-right">{statistikPenduduk.jumlahKK.toLocaleString('id-ID')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
