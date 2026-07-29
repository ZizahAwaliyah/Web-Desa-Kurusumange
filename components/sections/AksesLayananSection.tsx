import { PieChart, FileEdit, Info, BarChart3 } from 'lucide-react'

const layananCepat = [
  {
    icon: PieChart,
    iconBg: 'bg-green-100 text-green-700',
    judul: 'Transparansi Anggaran',
    deskripsi: 'Lihat APBDes dan Realisasi Anggaran Desa',
    href: '/transparansi-anggaran',
  },
  {
    icon: FileEdit,
    iconBg: 'bg-yellow-100 text-yellow-700',
    judul: 'Layanan Surat',
    deskripsi: 'Ajukan layanan surat secara mudah',
    href: '/layanan',
  },
  {
    icon: Info,
    iconBg: 'bg-blue-100 text-blue-700',
    judul: 'Informasi Publik',
    deskripsi: 'Ketahui informasi publik yang dikecualikan',
    href: '/ppid/daftar-informasi',
  },
  {
    icon: BarChart3,
    iconBg: 'bg-purple-100 text-purple-700',
    judul: 'Data & Infografis',
    deskripsi: 'Statistik dan data visual desa',
    href: '/infografik',
  },
]

export default function AksesLayananSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8">Akses Layanan Cepat</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {layananCepat.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.judul}
              href={item.href}
              className="border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${item.iconBg}`}>
                <Icon size={20} />
              </div>
              <h3 className="font-bold mb-1">{item.judul}</h3>
              <p className="text-gray-500 text-sm">{item.deskripsi}</p>
            </a>
          )
        })}
      </div>
    </section>
  )
}