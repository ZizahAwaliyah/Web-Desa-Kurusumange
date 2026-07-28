import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-100 border-t border-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo maros.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-green-900">Desa Kurusumange</span>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            Alamat Kantor Desa: Jl. Poros Kurusumange No. 45, Kecamatan Tanralili, Kabupaten Maros, Sulawesi Selatan.
          </p>
          <div className="flex gap-2">
            <a href="mailto:pemdeskurusumange@gmail.com" className="bg-white p-2 rounded-full shadow">
              <Mail size={16} />
            </a>
            <a href="https://wa.me/6281343718765" className="bg-white p-2 rounded-full shadow">
              <Phone size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold text-sm mb-3">ALAMAT KANTOR</p>
          <p className="text-sm text-gray-700 mb-2">
            Jl. Poros Kurusumange No. 45, Kecamatan Tanralili, Kabupaten Maros, Sulawesi Selatan.
          </p>
          <p className="text-sm text-gray-700 mb-1">081343718765</p>
          <p className="text-sm text-gray-700">pemdeskurusumange@gmail.com</p>
        </div>

        <div>
          <p className="font-bold text-sm mb-3">TAUTAN CEPAT</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="/transparansi-anggaran">Transparansi Anggaran</a></li>
            <li><a href="/layanan">Layanan Surat</a></li>
            <li><a href="/ppid">Informasi Publik</a></li>
            <li><a href="/infografik">Data & Infografis</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between text-xs text-gray-600">
          <p>© 2026 Pemerintah Desa Kurusumange. Seluruh Hak Cipta Dilindungi.</p>
          <p>Platform Desa Digital Berbasis Open Source</p>
        </div>
      </div>
    </footer>
  )
}