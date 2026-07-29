import { kepalaDesa, perangkatDesa, kepalaDusun, lembagaDesa } from '@/data/struktur-organisasi'
import PersonCard from '@/components/struktur/PersonCard'

export default function StrukturOrganisasiSection() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-blue-600 text-sm font-semibold tracking-wide mb-2">STRUKTUR ORGANISASI</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Pemerintahan Desa</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Mewujudkan tata kelola desa yang transparan, akuntabel, dan melayani untuk kesejahteraan masyarakat Desa Kurusumange.
        </p>
      </div>

      {/* Kepala Desa (Featured) */}
      <div className="mb-10">
        <PersonCard {...kepalaDesa} featured />
      </div>

      {/* Perangkat Desa */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {perangkatDesa.map((orang, i) => (
          <PersonCard key={i} {...orang} />
        ))}
      </div>

      {/* Kepala Wilayah (Dusun) */}
      <h2 className="text-2xl font-bold mb-6">Kepala Wilayah (Dusun)</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-5 mb-16">
        {kepalaDusun.map((orang, i) => (
          <PersonCard key={i} nama={orang.nama} jabatan={orang.jabatan} foto={orang.foto} />
        ))}
      </div>

      {/* Lembaga Desa */}
      <div className="grid md:grid-cols-3 gap-6">
        {lembagaDesa.map((lembaga) => (
          <div key={lembaga.nama} className="border rounded-2xl overflow-hidden">
            <div className={`${lembaga.warna} text-white p-5`}>
              <h3 className="font-bold text-lg">{lembaga.nama}</h3>
              <p className="text-white/80 text-xs">{lembaga.subtitle}</p>
            </div>
            <div className="p-5">
              <p className="font-semibold text-sm mb-2">👤 Ketua: {lembaga.ketua}</p>
              <p className="text-gray-600 text-sm">{lembaga.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}