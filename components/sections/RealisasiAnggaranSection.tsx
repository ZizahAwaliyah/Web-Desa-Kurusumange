'use client'

import { useState } from 'react'
import {
  TrendingUp, TrendingDown, Landmark, Wrench, Users, ShieldAlert,
  Clock, Building2, ChevronDown, ChevronUp, CircleDot, Quote,
} from 'lucide-react'
import { realisasiAnggaranData } from '@/data/anggaran'

/* ── helper ────────────────────────────────────────────────── */
function formatRp(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

function persen(angka: number, total: number) {
  return Math.round((angka / total) * 100)
}

/* ── icon map ───────────────────────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  Landmark, Wrench, Users, ShieldAlert, Clock, Building2, TrendingUp,
}

/* ═══════════════════════════════════════════════════════════ */
export default function RealisasiAnggaranSection() {
  const d = realisasiAnggaranData
  const [openId, setOpenId] = useState<number | null>(2)

  const toggle = (id: number) => setOpenId(openId === id ? null : id)

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* ── Header ── */}
      <div className="mb-8">
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          Laporan Realisasi Anggaran
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Transparansi Anggaran {d.tahun}
        </h1>
        <p className="text-gray-500 max-w-xl">
          Wujud nyata keterbukaan informasi publik Pemerintah Desa Kurusumange
          untuk kesejahteraan masyarakat.
        </p>
      </div>

      {/* ── Summary Cards ── */}
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {/* Pendapatan */}
        <div className="rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <p className="text-xs font-semibold text-gray-400 tracking-widest mb-3">TOTAL PENDAPATAN</p>
          <p className="text-2xl font-bold text-blue-700 mb-1">{formatRp(d.ringkasan.totalPendapatan.angka)}</p>
          <p className="flex items-center gap-1 text-green-600 text-xs font-medium">
            <TrendingUp size={13} /> {d.ringkasan.totalPendapatan.note}
          </p>
        </div>

        {/* Belanja */}
        <div className="rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <p className="text-xs font-semibold text-gray-400 tracking-widest mb-3">TOTAL BELANJA</p>
          <p className="text-2xl font-bold text-blue-700 mb-1">{formatRp(d.ringkasan.totalBelanja.angka)}</p>
          <p className="flex items-center gap-1 text-blue-500 text-xs font-medium">
            <CircleDot size={13} /> {d.ringkasan.totalBelanja.note}
          </p>
        </div>

        {/* Surplus */}
        <div className="rounded-2xl p-6 bg-green-900 text-white shadow-sm hover:shadow-lg transition-shadow duration-300">
          <p className="text-xs font-semibold text-green-300 tracking-widest mb-3">SURPLUS ANGGARAN</p>
          <p className="text-2xl font-bold mb-1">{formatRp(d.ringkasan.surplus.angka)}</p>
          <p className="flex items-center gap-1 text-green-300 text-xs font-medium">
            <TrendingDown size={13} /> {d.ringkasan.surplus.note}
          </p>
        </div>
      </div>

      {/* ── Body: sidebar + main ── */}
      <div className="grid md:grid-cols-[280px_1fr] gap-8">

        {/* ═══ SIDEBAR ═══ */}
        <aside className="space-y-5">

          {/* Sumber Pendapatan */}
          <div className="rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-bold text-lg mb-5">Sumber Pendapatan</h3>
            <div className="space-y-4">
              {d.sumberPendapatan.map((s) => {
                const pct = persen(s.angka, d.ringkasan.totalPendapatan.angka)
                return (
                  <div key={s.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-700">{s.label}</span>
                      <span className="font-semibold text-gray-900">{formatRp(s.angka)}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full ${s.warna}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Pembiayaan */}
          <div className="rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-bold text-lg mb-4">Pembiayaan (Netto)</h3>
            <div className="space-y-3">
              {d.pembiayaan.map((p) => {
                const Icon = iconMap[p.icon]
                return (
                  <div key={p.label} className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
                    <Icon size={18} className="text-gray-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{p.label}</p>
                      <p className="font-bold text-gray-900 text-sm">{formatRp(p.angka)}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Kepala Desa */}
          <div className="rounded-2xl bg-gray-900 text-white p-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <p className="text-xs font-semibold text-gray-400 tracking-widest mb-2">KEPALA DESA</p>
            <p className="font-bold text-xl mb-3">{d.kepalaDesa.nama}</p>
            <div className="flex gap-2">
              <Quote size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm italic leading-relaxed">
                {d.kepalaDesa.quote}
              </p>
            </div>
          </div>
        </aside>

        {/* ═══ MAIN: Rincian Belanja ═══ */}
        <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          {/* Section header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <h2 className="font-bold text-xl">Rincian Belanja per Bidang</h2>
            <span className="flex items-center gap-1.5 text-green-700 text-xs font-semibold">
              <CircleDot size={10} className="fill-green-500 text-green-500" />
              Realisasi Program
            </span>
          </div>

          {/* Accordion items */}
          <div className="divide-y divide-gray-100">
            {d.rincianBelanja.map((bidang) => {
              const Icon = iconMap[bidang.icon]
              const isOpen = openId === bidang.id
              const hasDetail = bidang.subProgram.length > 0

              return (
                <div key={bidang.id}>
                  {/* Row header — always visible */}
                  <button
                    onClick={() => hasDetail && toggle(bidang.id)}
                    className={`w-full flex items-center gap-4 px-6 py-5 text-left transition-colors ${
                      isOpen ? 'bg-green-50' : 'hover:bg-gray-50'
                    } ${hasDetail ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isOpen ? 'bg-green-800 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <Icon size={18} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900">
                        {bidang.id}. {bidang.nama}
                      </p>
                      <p className="text-gray-500 text-sm">{bidang.deskripsi}</p>
                    </div>

                    {/* Amount + chevron */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className={`font-bold text-sm ${isOpen ? 'text-green-700' : 'text-gray-900'}`}>
                        {formatRp(bidang.total)}
                      </span>
                      {hasDetail && (
                        isOpen
                          ? <ChevronUp size={16} className="text-green-700" />
                          : <ChevronDown size={16} className="text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Dropdown detail */}
                  {isOpen && hasDetail && (
                    <div className="bg-green-50 border-t border-green-100 px-6 py-5">
                      {/* Sub-program grid */}
                      {/* Sub-program list */}
<div className="space-y-3 mb-6">
  {bidang.subProgram.map((sp) => (
    <div key={sp.nama} className="flex justify-between items-start gap-6 text-sm">
      <span className="text-gray-600 flex-1">{sp.nama}</span>
      <span className="font-semibold text-gray-900 whitespace-nowrap">{formatRp(sp.angka)}</span>
    </div>
  ))}
</div>

                      {/* Photo gallery */}
                      {bidang.foto.length > 0 && (
                        <div className="grid grid-cols-3 gap-3">
                          {bidang.foto.map((f) => (
                            <div
                              key={f.src}
                              className="relative rounded-xl overflow-hidden bg-gray-200 aspect-video shadow-sm"
                            >
                              <img
                                src={f.src}
                                alt={f.caption}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).style.display = 'none'
                                }}
                              />
                              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-2 py-1">
                                {f.caption}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}