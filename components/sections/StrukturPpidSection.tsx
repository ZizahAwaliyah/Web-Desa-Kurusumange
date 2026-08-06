import { Headset, Database, Scale, ShieldCheck, RotateCw } from 'lucide-react'
import { strukturPpid } from '@/data/struktur-ppid'

const iconMap: Record<string, React.ElementType> = { Headset, Database, Scale }

export default function StrukturPpidSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-14">
      <div className="text-center mb-10">
        <p className="text-blue-600 text-sm font-semibold tracking-wide mb-2">MANAJEMEN INFORMASI</p>
        <h2 className="text-3xl font-bold mb-3">Struktur Organisasi PPID</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Penyelenggaraan informasi publik dikelola secara hierarkis untuk menjamin kepastian hukum dan kualitas layanan kepada masyarakat.
        </p>
      </div>

      {/* Bagan Struktur */}
      <div className="flex flex-col items-center mb-10">
        <div className="bg-green-900 text-white rounded-xl px-10 py-5 text-center w-72 shadow-sm">
          <p className="text-xs text-white/70">{strukturPpid.atasan.label}</p>
          <p className="font-bold text-lg">{strukturPpid.atasan.jabatan}</p>
          <p className="text-xs text-white/70">{strukturPpid.atasan.sub}</p>
        </div>

        <div className="w-px h-8 bg-gray-300" />

        <div className="bg-blue-800 text-white rounded-xl px-10 py-5 text-center w-72 mb-8 shadow-sm">
          <p className="text-xs text-white/70">{strukturPpid.pelaksana.label}</p>
          <p className="font-bold text-lg">{strukturPpid.pelaksana.jabatan}</p>
          <p className="text-xs text-white/70">{strukturPpid.pelaksana.sub}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 w-full">
          {strukturPpid.bidang.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 ${item.warna}`}>
                  <Icon size={18} />
                </div>
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="font-bold text-sm">{item.sub}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Info Bawah */}
      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-blue-50 rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
          <img src="/ppid-transparansi.jpg" alt="Transparansi" className="w-16 h-16 rounded-lg object-cover" />
          <div>
            <h4 className="font-bold text-sm mb-1">Transparansi Publik</h4>
            <p className="text-xs text-gray-600">Seluruh jajaran PPID berkomitmen penuh pada keterbukaan informasi sesuai UU No. 14 Tahun 2008.</p>
          </div>
        </div>

        <div className="bg-blue-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <ShieldCheck size={26} className="text-blue-800 mb-2" />
          <p className="font-bold text-sm">100% Akuntabel</p>
        </div>

        <div className="bg-yellow-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <RotateCw size={26} className="text-yellow-800 mb-2" />
          <p className="font-bold text-sm">Update Berkala</p>
        </div>
      </div>
    </section>
  )
}
