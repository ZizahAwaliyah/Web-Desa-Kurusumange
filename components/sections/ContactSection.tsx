import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Hubungi Kami</h2>

        <div className="flex items-start gap-3 mb-5">
          <MapPin className="text-blue-600 mt-1" size={20} />
          <div>
            <p className="font-semibold">Kantor Desa</p>
            <p className="text-gray-600 text-sm">
              Jl. Raya Kurusumange No. 12, Kec. Tanralili, Kab. Maros, Sulawesi Selatan
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-5">
          <Phone className="text-blue-600 mt-1" size={20} />
          <div>
            <p className="font-semibold">WhatsApp Center</p>
            <a href="https://wa.me/6281343718765" className="text-blue-600 text-sm">
              +62 813-4371-8765
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="text-blue-600 mt-1" size={20} />
          <div>
            <p className="font-semibold">Email Resmi</p>
            <p className="text-gray-600 text-sm">pemdeskurusumange@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="relative bg-blue-100 rounded-2xl h-72 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p>🗺️</p>
          <p className="text-sm">Interaktif Map Desa Kurusumange</p>
        </div>
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow p-3 text-sm">
          <p className="font-semibold">Jam Operasional</p>
          <p>Senin - Jumat: 08:00 - 16:00 WITA</p>
          <p>Sabtu - Minggu: Tutup</p>
        </div>
      </div>
    </section>
  )
}