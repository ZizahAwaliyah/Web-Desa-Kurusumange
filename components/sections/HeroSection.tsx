'use client'

import { FileText, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const backgroundImages = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg',
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 mt-6">
    <section className="relative rounded-3xl overflow-hidden mx-6 mt-6 min-h-[500px] flex flex-col justify-center px-10">
      {/* Background foto yang berganti-ganti */}
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay gelap supaya teks tetap kebaca di atas foto apapun */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />

      {/* Konten (tetap sama, tidak berubah) */}
      <div className="relative z-10">
        <span className="inline-flex items-center gap-2 w-fit bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          🏛️ PORTAL RESMI PEMERINTAH DESA
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Desa Kurusumange
        </h1>

        <p className="text-white/90 max-w-xl mb-6">
          Mengembangkan potensi lokal melalui budidaya Ikan Nila dan pertanian modern untuk kesejahteraan seluruh warga desa.
        </p>

        <div className="flex gap-3 mb-10">
          <a href="/profil" className="flex items-center gap-2 bg-white text-gray-900 font-medium px-5 py-2.5 rounded-lg hover:bg-gray-100">
            <FileText size={18} />
            Profil Desa
          </a>
          <a href="/ppid/daftar-informasi" className="flex items-center gap-2 border border-white text-white font-medium px-5 py-2.5 rounded-lg hover:bg-white/10">
            Informasi Publik
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="flex gap-1.5">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === current ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  </div>
  )
}