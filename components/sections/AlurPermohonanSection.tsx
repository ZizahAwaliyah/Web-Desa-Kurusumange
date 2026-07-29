import { FileEdit, UserCheck, FileSearch, CheckCircle2, Clock, CreditCard } from 'lucide-react'
import { alurPermohonan, infoLayanan } from '@/data/alur-permohonan'

const iconMap: Record<string, React.ElementType> = {
  FileEdit, UserCheck, FileSearch, CheckCircle2,
}

export default function AlurPermohonanSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-14">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Alur Permohonan Informasi</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Panduan praktis bagi warga dalam mengakses data dan informasi publik yang dikelola oleh Pemerintah Desa Kurusumange.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-8 mb-14">
        {alurPermohonan.map((step, i) => {
          const Icon = iconMap[step.icon]
          const isLast = i === alurPermohonan.length - 1
          return (
            <div key={step.nomor} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className={`${step.warna} text-white w-11 h-11 rounded-xl flex items-center justify-center font-bold flex-shrink-0`}>
                  {step.nomor}
                </div>
                {!isLast && <div className="w-px flex-1 bg-gray-200 mt-2" />}
              </div>

              <div className="border rounded-2xl p-6 flex-1 mb-2">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={20} className="text-gray-700" />
                  <h3 className="font-bold text-lg">{step.judul}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{step.deskripsi}</p>
                {step.tags.length > 0 && (
                  <div className="flex gap-2">
                    {step.tags.map((tag) => (
                      <span key={tag} className="border rounded-full px-3 py-1 text-xs text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Info Waktu & Biaya */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-300 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={18} className="text-blue-900" />
            <h3 className="font-bold text-blue-900">{infoLayanan.waktu.label}</h3>
          </div>
          <div className="bg-blue-200/60 rounded-xl p-4 mb-4">
            <p className="text-2xl font-bold text-blue-950">{infoLayanan.waktu.nilai}</p>
            <p className="text-blue-900 text-sm">{infoLayanan.waktu.subLabel}</p>
          </div>
          <p className="text-blue-950 text-sm">{infoLayanan.waktu.deskripsi}</p>
        </div>

        <div className="bg-yellow-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard size={18} className="text-yellow-900" />
            <h3 className="font-bold text-yellow-900">{infoLayanan.biaya.label}</h3>
          </div>
          <div className="bg-yellow-100/60 rounded-xl p-4 mb-4">
            <p className="text-2xl font-bold text-yellow-950">{infoLayanan.biaya.nilai}</p>
            <p className="text-yellow-900 text-sm">{infoLayanan.biaya.subLabel}</p>
          </div>
          <p className="text-yellow-950 text-sm">{infoLayanan.biaya.deskripsi}</p>
        </div>
      </div>
    </div>
  )
}