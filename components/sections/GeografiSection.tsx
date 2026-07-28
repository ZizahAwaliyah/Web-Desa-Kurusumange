import { geografiData } from '@/data/profildesa'

export default function GeografiSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-6 h-0.5 bg-blue-600" />
        <h2 className="text-2xl font-bold">Geografi & Wilayah</h2>
      </div>

      <div className="grid md:grid-cols-[1fr_320px] gap-6">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-300 to-green-900 h-96 flex items-center justify-center">
          <span className="bg-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            📍 Peta Administrasi Kurusumange
          </span>
        </div>

        <div className="space-y-4">
          <div className="border rounded-2xl p-5">
            <p className="text-blue-600 text-xs font-semibold mb-3">STATISTIK LAHAN</p>
            {geografiData.statistikLahan.map((item, i) => (
              <div key={i} className="flex justify-between py-2 border-b last:border-0 text-sm">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-semibold">{item.nilai}</span>
              </div>
            ))}
          </div>

          <div className="border rounded-2xl p-5">
            <p className="text-blue-600 text-xs font-semibold mb-3">BATAS WILAYAH</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400 text-xs">UTARA</p>
                <p className="font-medium">{geografiData.batasWilayah.utara}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">SELATAN</p>
                <p className="font-medium">{geografiData.batasWilayah.selatan}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">BARAT</p>
                <p className="font-medium">{geografiData.batasWilayah.barat}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">TIMUR</p>
                <p className="font-medium">{geografiData.batasWilayah.timur}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}