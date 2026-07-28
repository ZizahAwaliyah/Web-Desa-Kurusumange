'use client'

import { useState } from 'react'
import { Info, History, Target, MapPinned } from 'lucide-react'
import { profilTabs, geografiData } from '@/data/profildesa'

const tabList = [
  { key: 'tentang', icon: Info },
  { key: 'sejarah', icon: History },
  { key: 'visiMisi', icon: Target },
  { key: 'wilayah', icon: MapPinned },
]

export default function ProfilTabsSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof profilTabs>('wilayah')

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[280px_1fr] gap-8">
      {/* Sidebar */}
      <aside className="border rounded-2xl p-4 h-fit">
        {tabList.map(({ key, icon: Icon }) => {
          const tab = profilTabs[key as keyof typeof profilTabs]
          const isActive = activeTab === key
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof profilTabs)}
              className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-xl mb-1 transition-colors ${
                isActive ? 'bg-blue-200 text-blue-900 font-semibold' : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {key === 'tentang' && (
                <span className="bg-green-800 text-white p-2 rounded-lg">
                  <Icon size={16} />
                </span>
              )}
              {key !== 'tentang' && <Icon size={18} />}
              <div>
                <p className="text-sm">{tab.label}</p>
                {tab.subLabel && <p className="text-xs text-gray-400">{tab.subLabel}</p>}
              </div>
            </button>
          )
        })}
      </aside>

      {/* Konten */}
      <div>
        {activeTab === 'tentang' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{profilTabs.tentang.label}</h2>
            <p className="text-gray-600 leading-relaxed">{profilTabs.tentang.konten}</p>
          </div>
        )}

        {activeTab === 'sejarah' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{profilTabs.sejarah.label}</h2>
            <p className="text-gray-600 leading-relaxed">{profilTabs.sejarah.konten}</p>
          </div>
        )}

        {activeTab === 'visiMisi' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Visi & Misi</h2>
            <p className="text-gray-600 mb-6"><strong>Visi:</strong> {profilTabs.visiMisi.visi}</p>
            <p className="font-semibold mb-2">Misi:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {profilTabs.visiMisi.misi.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'wilayah' && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-0.5 bg-blue-600" />
              <h2 className="text-2xl font-bold">Wilayah Desa</h2>
            </div>

            <div className="relative border-l-2 border-gray-200 pl-6 space-y-8">
              {profilTabs.wilayah.timeline.map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-blue-600" />
                  <div className="border rounded-xl p-5">
                    <p className="text-blue-600 text-sm font-medium mb-1">
                      {item.tahun} — {item.label}
                    </p>
                    <h3 className="font-bold text-lg mb-2">{item.judul}</h3>
                    <p className="text-gray-600 text-sm">{item.deskripsi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}