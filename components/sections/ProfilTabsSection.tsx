'use client'

import { useState } from 'react'
import { Info, History, Target, MapPinned, Eye, Rocket } from 'lucide-react'
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
      <aside className="bg-white rounded-2xl p-4 h-fit shadow-sm">
        {tabList.map(({ key, icon: Icon }) => {
          const tab = profilTabs[key as keyof typeof profilTabs]
          const isActive = activeTab === key
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof profilTabs)}
              className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-xl mb-1 transition-colors ${
                isActive ? 'bg-blue-50 text-blue-900 font-semibold' : 'hover:bg-gray-50 text-gray-700'
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
    <div className="flex items-center gap-2 mb-6">
      <span className="w-6 h-0.5 bg-blue-600" />
      <h2 className="text-2xl font-bold">{profilTabs.sejarah.label}</h2>
    </div>

    <div className="bg-white rounded-2xl p-8 shadow-sm">
           <History size={32} className="text-blue-200 mb-4" />
          <p className="text-gray-700 leading-relaxed text-[15px] first-letter:text-4xl first-letter:font-bold first-letter:text-green-800 first-letter:mr-1 first-letter:float-left">
             {profilTabs.sejarah.konten}
              </p>
             </div>
             </div>
          )}

        {activeTab === 'visiMisi' && (
  <div>
    <div className="flex items-center gap-2 mb-6">
      <span className="w-6 h-0.5 bg-blue-600" />
      <h2 className="text-2xl font-bold">Visi & Misi</h2>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="bg-green-800 text-white w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Eye size={24} />
        </div>
        <h3 className="font-bold text-lg mb-4">Visi</h3>
        <p className="text-gray-600 italic leading-relaxed">"{profilTabs.visiMisi.visi}"</p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
            <Rocket size={20} />
          </div>
          <h3 className="font-bold text-lg text-blue-700">Misi</h3>
        </div>
        <ol className="space-y-4">
          {profilTabs.visiMisi.misi.map((m, i) => (
            <li key={i} className="flex gap-3">
              <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                {i + 1}
              </span>
              <p className="text-gray-600 text-sm">{m}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </div>
)}

        {activeTab === 'wilayah' && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-0.5 bg-blue-600" />
              <h2 className="text-2xl font-bold">Wilayah Desa</h2>
            </div>

            <div className="relative border-l-2 border-gray-100 pl-6 space-y-8">
              {profilTabs.wilayah.timeline.map((item, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-blue-600" />
                  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
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
