export default function SambutanSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Website Desa Kurusumange Untuk Semua
        </h2>
        <p className="text-gray-600 mb-6">
          Kami senang Anda sudah berkunjung, semoga melalui situs web ini kami dapat memberikan segala informasi yang aktual dan terperbarui langsung dari desa kami. Situs web ini merupakan salah satu wujud dari komitmen pemerintah desa, pada pentingnya komunikasi dan transparansi publik.
        </p>
        <p className="font-semibold">H Muh Ridwan</p>
        <p className="text-gray-500 italic text-sm">Kepala Desa Kurusumange</p>
      </div>

      <div className="flex justify-center">
        <img
          src="/kepala-desa.png"
          alt="Kepala Desa Kurusumange"
          className="max-h-[400px] object-contain"
        />
      </div>
    </section>
  )
}