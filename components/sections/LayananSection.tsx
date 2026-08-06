import { layananList, prosedurPengajuan } from '@/data/layanan'
import {
  MapPin, CreditCard, Store, UserX, Smile, ShieldCheck,
  FileEdit, Send, Settings, CheckCircle2,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  MapPin, CreditCard, Store, UserX, Smile, ShieldCheck,
  FileEdit, Send, Settings, CheckCircle2,
}

export default function LayananSection() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Layanan Administrasi Desa</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Komitmen kami adalah menghadirkan pelayanan administrasi yang cepat, transparan, dan akuntabel untuk seluruh warga Desa Kurusumange.
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {layananList.map((layanan) => {
            const Icon = iconMap[layanan.icon]
            return (
              <div key={layanan.nama} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 text-blue-700 p-2.5 rounded-xl">
                    <Icon size={20} />
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    GRATIS
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">{layanan.nama}</h3>
                <p className="text-gray-600 text-sm mb-4">{layanan.deskripsi}</p>
                <p className="text-xs font-semibold text-gray-400 mb-2">PERSYARATAN:</p>
                <ul className="space-y-1.5">
                  {layanan.persyaratan.map((syarat) => (
                    <li key={syarat} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={15} className="text-green-600 mt-0.5 flex-shrink-0" />
                      {syarat}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Prosedur Pengajuan */}
        <div className="bg-gradient-to-br from-gray-100 to-blue-50 rounded-3xl p-10 text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Prosedur Pengajuan</h2>
          <p className="text-gray-600 mb-10">Ikuti 4 langkah mudah untuk mendapatkan dokumen Anda</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {prosedurPengajuan.map((step) => {
              const Icon = iconMap[step.icon]
              return (
                <div key={step.nomor}>
                  <div className="bg-green-900 text-white w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold mb-2">{step.nomor}. {step.judul}</h3>
                  <p className="text-gray-600 text-sm">{step.deskripsi}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}