import { Calendar, ArrowRight } from 'lucide-react'

// Data dummy sementara, nanti diganti ambil dari Supabase
const beritaLainnya = [
  { id: 1, judul: 'Cerita Rakyat - Asal Usul Rawa Pening', tanggal: '30 Juni 2026' },
  { id: 2, judul: 'Pelatihan UMKM Warga Desa', tanggal: '29 Juni 2026' },
  { id: 3, judul: 'Musyawarah Rencana Pembangunan Desa', tanggal: '29 Juni 2026' },
]

export default function BeritaHomeSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Berita</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Berita Utama (Featured) */}
        <div className="md:col-span-2 bg-gray-100 rounded-2xl p-8 flex flex-col justify-end min-h-[320px]">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Selamat Datang di Sistem Informasi Digital Desa Kurusumange
          </h3>
          <p className="text-gray-600 mb-5 max-w-xl">
            Mengembangkan potensi lokal melalui budidaya Ikan Nila dan pertanian modern untuk kesejahteraan seluruh warga desa.
          </p>
          <a href="/berita" className="w-fit bg-white border px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50">
            Baca Selengkapnya
          </a>
        </div>

        {/* Sidebar Berita Lainnya */}
        <div className="bg-gray-50 rounded-2xl p-4">
          <div className="bg-gray-200 rounded-full text-center py-2 font-semibold mb-4">
            Berita Lainnya
          </div>

          <div className="space-y-4">
            {beritaLainnya.map((berita) => (
              <a key={berita.id} href="/berita" className="flex gap-3 items-start hover:bg-white rounded-lg p-2 -mx-2">
                <div className="w-14 h-14 bg-gray-200 rounded-lg flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm leading-snug">{berita.judul}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <Calendar size={12} /> {berita.tanggal.toUpperCase()}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <a href="/berita" className="flex items-center justify-center gap-1 mt-4 bg-gray-100 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200">
            Lihat Semua Berita <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}