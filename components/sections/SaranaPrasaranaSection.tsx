import {
  GraduationCap, Stethoscope, Landmark, Trophy, Trees,
} from 'lucide-react'
import { saranaPrasaranaInfo } from '@/data/saranaprasarana'

/* ── icon map ───────────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  GraduationCap, Stethoscope, Landmark, Trophy, Trees,
}

/* ═══════════════════════════════════════════════════════════ */
export default function SaranaPrasaranaSection() {
  const d = saranaPrasaranaInfo

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* ── Header ── */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {d.judul}
        </h2>
        <p className="text-gray-500">{d.deskripsi}</p>
      </div>

      {/* ── Grid Cards ── */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {d.data.map((item) => {
          const Icon = iconMap[item.icon]
          return (
            <div
              key={item.label}
              className="border rounded-2xl bg-white p-6 flex flex-col items-center text-center"
            >
              <Icon size={28} className="text-green-700 mb-4" strokeWidth={1.75} />

              <p className="text-3xl font-bold text-gray-900 mb-1">
                {item.nilai}
                {item.satuan && (
                  <span className="text-base font-semibold text-gray-400 ml-1">
                    {item.satuan}
                  </span>
                )}
              </p>

              <p className="text-gray-700 font-medium">{item.label}</p>

              {item.keterangan && (
                <p className="text-xs text-gray-400 mt-1">{item.keterangan}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
