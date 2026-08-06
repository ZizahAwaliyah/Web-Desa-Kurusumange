'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type FotoGaleri = {
  id: number
  judul: string
  kategori: string | null
  gambar_url: string
}

export default function GaleriSection({ galeriDesa }: { galeriDesa: FotoGaleri[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const showPrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + galeriDesa.length) % galeriDesa.length)
  }

  const showNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % galeriDesa.length)
  }

  const selectedFoto = selectedIndex !== null ? galeriDesa[selectedIndex] : null

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Galeri Desa</h1>
      <p className="text-gray-600 mb-8">
        Dokumentasi kegiatan, pembangunan, dan keseharian masyarakat Desa Kurusumange.
      </p>

      {galeriDesa.length === 0 ? (
        <p className="text-center text-gray-500 py-16">Belum ada foto galeri.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {galeriDesa.map((foto, index) => (
            <button
              key={foto.id}
              onClick={() => openLightbox(index)}
              className="group text-left rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={foto.gambar_url}
                  alt={foto.judul}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-sm line-clamp-1">{foto.judul}</p>
                {foto.kategori && (
                  <p className="text-green-700 text-xs mt-0.5">{foto.kategori}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {selectedFoto && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center px-4">
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white hover:opacity-70">
            <X size={28} />
          </button>

          <button onClick={showPrev} className="absolute left-4 md:left-10 text-white hover:opacity-70">
            <ChevronLeft size={36} />
          </button>

          <img
            src={selectedFoto.gambar_url}
            alt={selectedFoto.judul}
            className="max-h-[75vh] max-w-full rounded-xl object-contain"
          />

          <div className="text-center mt-6">
            <p className="text-white font-bold text-lg">{selectedFoto.judul}</p>
            {selectedFoto.kategori && (
              <p className="text-green-400 text-sm mt-1">{selectedFoto.kategori}</p>
            )}
          </div>

          <button onClick={showNext} className="absolute right-4 md:right-10 text-white hover:opacity-70">
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </div>
  )
}
