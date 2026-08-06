import { Mail, Phone, Camera, ChevronRight, MapPin } from 'lucide-react'

const navigasiCepat = [
  { label: 'Beranda', href: '/' },
  { label: 'Berita', href: '/berita' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'Informasi Publik', href: '/ppid/daftar-informasi' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Kolom 1: Logo & Deskripsi */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo maros.png" alt="Logo" className="h-10 w-10" />
            <div>
              <p className="font-bold text-green-900">Desa Kurusumange</p>
              <p className="text-xs text-gray-400 font-medium">KAB. MAROS</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed">
            Sistem informasi manajemen desa terpadu untuk mewujudkan Desa Kurusumange yang cerdas, transparan, dan sejahtera melalui tata kelola digital.
          </p>
          <div className="flex gap-2">
            <a href="#" className="bg-gray-100 hover:bg-green-100 hover:text-green-700 p-2.5 rounded-full transition-colors">
             <Camera size={16} />
                </a>
            <a href="mailto:dkurusumange@gmail.com" className="bg-gray-100 hover:bg-green-100 hover:text-green-700 p-2.5 rounded-full transition-colors">
              <Mail size={16} />
            </a>
            <a href="https://wa.me/6281343718765" className="bg-gray-100 hover:bg-green-100 hover:text-green-700 p-2.5 rounded-full transition-colors">
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Kolom 2: Navigasi Cepat */}
        <div>
          <p className="font-bold text-sm text-gray-900 mb-4 tracking-wide">NAVIGASI CEPAT</p>
          <ul className="space-y-3">
            {navigasiCepat.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 text-gray-600 hover:text-green-700 text-sm transition-colors group"
                >
                  <ChevronRight size={14} className="text-green-600 group-hover:translate-x-0.5 transition-transform" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3: Kontak Kami */}
        <div>
          <p className="font-bold text-sm text-gray-900 mb-4 tracking-wide">KONTAK KAMI</p>

          <div className="flex items-start gap-2.5 mb-4">
            <MapPin size={16} className="text-green-600 shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              Jl. Poros Kariango KM.8 No.28b, Desa Kurusumange, Kec. Tanralili, Kab. Maros, Sulawesi Selatan
            </p>
          </div>

          <div className="flex items-center gap-2.5 mb-5">
            <Mail size={16} className="text-green-600 shrink-0" />
            <p className="text-sm text-gray-600">dkurusumange@gmail.com</p>
          </div>

         <div className="bg-green-50 rounded-xl p-4">
  <p className="text-green-700 font-bold text-xs tracking-wide mb-2">JAM PELAYANAN KANTOR</p>
  <div className="space-y-1 text-sm text-gray-700">
    <p>Senin - Kamis: <span className="font-semibold">08:00 - 16:00 WITA</span></p>
    <p>Jumat: <span className="font-semibold">08:00 - 12:00 WITA</span></p>
    <p>Sabtu - Minggu: <span className="font-semibold">Tutup</span></p>
  </div>
</div>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <p>© 2026 Desa Kurusumange. Hak Cipta Dilindungi.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-green-700 transition-colors">Peta Situs</a>
            <a href="#" className="hover:text-green-700 transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  )
}