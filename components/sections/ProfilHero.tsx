export default function ProfilHero() {
  return (
    <section className="relative h-[400px] flex items-end">
      <img
        src="/profil-hero.jpg"
        alt="Desa Kurusumange"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />

      <div className="relative max-w-7xl mx-auto px-6 pb-10 w-full">
        <span className="inline-block bg-blue-200 text-blue-900 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          PROFIL DESA
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Menapak Jejak Desa Kurusumange
        </h1>
        <p className="text-white/90 max-w-2xl">
          Sebuah harmoni antara alam yang melimpah dan semangat gotong royong masyarakat. Desa Kurusumange berdiri sebagai pusat agrikultur yang berkomitmen pada transparansi dan kesejahteraan berkelanjutan.
        </p>
      </div>
    </section>
  )
}