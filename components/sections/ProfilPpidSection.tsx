import {
  Scale, ShieldCheck, Landmark, ClipboardList,
  RefreshCw, FolderCog, HelpCircle, ClipboardCheck,
  CalendarClock, Asterisk, Clock, Lock,
} from 'lucide-react'
import { dasarHukum, tugasUtama, klasifikasiInfo } from '@/data/profil-ppid'

const iconMap: Record<string, React.ElementType> = {
  Scale, ShieldCheck, Landmark, ClipboardList,
  RefreshCw, FolderCog, HelpCircle, ClipboardCheck,
  CalendarClock, Asterisk, Clock, Lock,
}

export default function ProfilPpidSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Hero */}
      <section className="relative rounded-3xl overflow-hidden min-h-[380px] flex items-center mb-14">
        <img
          src="/ppid-hero.jpg"
          alt="PPID Desa Kurusumange"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative px-10 py-10">
          <span className="inline-block bg-green-800 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Profil Lembaga
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            PPID Desa Kurusumange
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Pejabat Pengelola Informasi dan Dokumentasi (PPID) Desa Kurusumange hadir sebagai garda terdepan dalam mewujudkan tata kelola pemerintahan desa yang transparan, akuntabel, dan partisipatif sesuai amanat UU No. 14 Tahun 2008.
          </p>
        </div>
      </section>

      {/* Dasar Hukum */}
      <section className="mb-14">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
          <span className="w-1 h-6 bg-blue-600 rounded-full" /> Dasar Hukum
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {dasarHukum.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.judul} className="bg-white border rounded-2xl p-6 flex gap-4">
                <Icon size={22} className="text-gray-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{item.judul}</h3>
                  <p className="text-gray-600 text-sm">{item.deskripsi}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tugas Utama */}
      <section className="mb-14">
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
          <span className="w-1 h-6 bg-green-700 rounded-full" /> Tugas Utama PPID
        </h2>
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {tugasUtama.slice(0, 2).map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.judul} className={`rounded-2xl p-6 ${item.warna}`}>
                <Icon size={28} className="mb-4" />
                <h3 className="font-bold text-xl mb-2">{item.judul}</h3>
                <p className="text-sm opacity-90">{item.deskripsi}</p>
              </div>
            )
          })}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {tugasUtama.slice(2, 4).map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.judul} className={`rounded-2xl p-6 flex gap-4 ${item.warna}`}>
                <Icon size={24} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{item.judul}</h3>
                  <p className="text-sm opacity-80">{item.deskripsi}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Klasifikasi Informasi */}
      <section>
        <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
          <span className="w-1 h-6 bg-blue-600 rounded-full" /> Klasifikasi Informasi Publik
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {klasifikasiInfo.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.judul} className="bg-white border rounded-2xl p-6 text-center">
                <Icon size={26} className={`mx-auto mb-3 ${item.warna}`} />
                <h3 className="font-bold text-sm mb-2 tracking-wide">{item.judul}</h3>
                <p className="text-gray-500 text-xs">{item.deskripsi}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}