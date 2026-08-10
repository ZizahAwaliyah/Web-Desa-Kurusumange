export default function SambutanSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
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

      <div
  className="w-full max-w-sm h-[340px] -mt-8 md:ml-auto overflow-hidden relative"
  style={{
    WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
  }}
>
  <img
    src="/kepala-desa.png"
    alt="Kepala Desa Kurusumange"
    className="w-full h-full object-cover object-top scale-105"
  />
</div>
    </section>
  )
}