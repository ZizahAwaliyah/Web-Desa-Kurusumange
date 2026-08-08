import { MapPin, Phone, Mail, Navigation } from 'lucide-react'

const ALAMAT_DESA = 'Jl. Poros Kariango KM.8 No.28b, Desa Kurusumange, Kec. Tanralili, Kab. Maros, Sulawesi Selatan'
const LATITUDE = -5.0953221
const LONGITUDE = 119.5791124
const MAPS_EMBED_URL = `https://www.google.com/maps?q=${LATITUDE},${LONGITUDE}&output=embed`
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LATITUDE},${LONGITUDE}`

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Hubungi Kami</h2>

        <div className="flex items-start gap-3 mb-5">
          <MapPin className="text-blue-600 mt-1" size={20} />
          <div>
            <p className="font-semibold">Kantor Desa</p>
            <p className="text-gray-600 text-sm">{ALAMAT_DESA}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 mb-5">
          <Phone className="text-blue-600 mt-1" size={20} />
          <div>
            <p className="font-semibold">WhatsApp Center</p>
            <a href="https://wa.me/6282190441036" className="text-blue-600 text-sm">
              +62 821-9044-1036
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="text-blue-600 mt-1" size={20} />
          <div>
            <p className="font-semibold">Email Resmi</p>
            <p className="text-gray-600 text-sm">dkurusumange@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden h-72 shadow-sm">
        <iframe
          src={MAPS_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peta Lokasi Desa Kurusumange"
        />

        
        <a
          href={MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50"
        >
          <Navigation size={15} className="text-blue-600" />
          Petunjuk Arah
        </a>
      </div>
    </section>
  )
}