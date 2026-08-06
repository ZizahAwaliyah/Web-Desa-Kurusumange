import { saranaPrasarana } from '@/data/saranaprasarana'
import {
  Building2, Route, Landmark, School, GraduationCap,
  BookOpen, HeartPulse, Hospital, Droplets, ChevronDown,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Building2, Route, Landmark, School, GraduationCap,
  BookOpen, HeartPulse, Hospital, Droplets,
}

function parseAngka(jumlah: string) {
  return parseFloat(jumlah.replace(/\./g, '').replace(',', '.'))
}

export default function SaranaPrasaranaSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold mb-2">Sarana & Prasarana Desa</h2>
        <p className="text-gray-600">
          Data fasilitas umum yang tersedia untuk mendukung kegiatan masyarakat Desa Kurusumange.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {saranaPrasarana.map((group) => {
          const maxJumlah = Math.max(...group.items.map((item) => parseAngka(item.jumlah)))

          return (
            <div
              key={group.kategori}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Header Card */}
              <div className="flex items-center gap-3 p-5 border-b border-gray-100">
                <div className="bg-green-100 text-green-700 w-10 h-10 rounded-lg flex items-center justify-center">
                  {(() => {
                    const Icon = iconMap[group.items[0].icon]
                    return <Icon size={18} />
                  })()}
                </div>
                <div>
                  <p className="text-xs text-green-700 font-semibold tracking-wide">DATA DESA</p>
                  <h3 className="font-bold text-lg">{group.kategori}</h3>
                </div>
              </div>

              {/* List Item */}
              <div>
                {group.items.map((item, i) => {
                  const nilai = parseAngka(item.jumlah)
                  const persenBar = Math.max(8, Math.round((nilai / maxJumlah) * 100))
                  const Icon = iconMap[item.icon]

                  return (
                    <div
                      key={item.nama}
                      className={`p-5 ${i !== group.items.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon size={15} className="text-gray-500" />
                          <p className="text-sm font-semibold tracking-wide">{item.nama.toUpperCase()}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-green-700 font-bold text-sm">{item.jumlah}</span>
                          <ChevronDown size={14} className="text-gray-400" />
                        </div>
                      </div>

                      <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3">
                        <div
                          className="bg-green-700 h-1.5 rounded-full"
                          style={{ width: `${persenBar}%` }}
                        />
                      </div>

                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">SATUAN</span>
                        <span className="font-medium text-gray-600">{item.satuan}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
