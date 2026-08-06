export default function PotensiHero() {
  return (
    <section className="relative h-72 flex items-center justify-center text-center bg-gradient-to-b from-gray-500 to-gray-700">
      <img
        src="/potensihero.JPG"
        alt="Potensi Desa Kurusumange"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Potensi Desa</h1>
        <p className="text-white/90 max-w-xl mx-auto">
          Menelusuri jejak kesejahteraan melalui pemanfaatan sumber daya alam yang berkelanjutan dan kreativitas masyarakat lokal Kurusumange.
        </p>
      </div>
    </section>
  )
}