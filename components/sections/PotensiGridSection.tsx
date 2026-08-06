import { potensiDesa } from '@/data/potensi-desa'

const badgeColor: Record<string, string> = {
  Perikanan: 'bg-blue-100 text-blue-700',
  Pertanian: 'bg-green-100 text-green-700',
  UMKM: 'bg-yellow-100 text-yellow-700',
}

export default function PotensiGridSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-2">Galeri Potensi</h2>
      <p className="text-gray-600 mb-8">
        Temukan berbagai sektor unggulan yang menjadi penggerak ekonomi desa kami.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {potensiDesa.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-48 bg-gray-100 overflow-hidden">
              <img
                src={item.gambar}
                alt={item.nama}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${badgeColor[item.kategori]}`}>
                {item.kategori}
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-bold text-lg mb-2 group-hover:text-green-700 transition-colors">
                {item.nama}
              </h3>
              <p className="text-gray-600 text-sm">{item.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
