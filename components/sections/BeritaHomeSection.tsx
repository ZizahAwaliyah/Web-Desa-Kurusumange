import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

function formatTanggal(tanggal: string) {
  return new Date(tanggal).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default async function BeritaHomeSection() {
  // Ambil berita terbaru sebagai featured
  const { data: featured } = await supabase
    .from('berita')
    .select('*')
    .order('tanggal_publish', { ascending: false })
    .limit(1)
    .single()

  // Ambil 3 berita berikutnya untuk sidebar
  const { data: beritaLainnya } = await supabase
    .from('berita')
    .select('*')
    .order('tanggal_publish', { ascending: false })
    .range(1, 3)

  if (!featured) {
    return null // Tidak tampilkan section kalau belum ada berita sama sekali
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Berita</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Berita Utama (Featured) */}
        <Link
          href={`/berita/${featured.slug}`}
          className="group md:col-span-2 bg-gray-50 rounded-2xl overflow-hidden flex flex-col justify-end min-h-[320px] shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
        >
          {featured.gambar_url ? (
            <img
              src={featured.gambar_url}
              alt={featured.judul}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-100" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="relative p-8">
            <p className="text-white/80 text-xs flex items-center gap-1 mb-3">
              <Calendar size={12} /> {formatTanggal(featured.tanggal_publish)}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {featured.judul}
            </h3>
            <p className="text-white/90 mb-5 max-w-xl line-clamp-2">
              {featured.konten}
            </p>
            <span className="w-fit bg-white text-gray-900 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-50 inline-block">
              Baca Selengkapnya
            </span>
          </div>
        </Link>

        {/* Sidebar Berita Lainnya */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="bg-gray-100 rounded-full text-center py-2 font-semibold mb-4 text-sm">
            Berita Lainnya
          </div>

          {beritaLainnya && beritaLainnya.length > 0 ? (
            <div className="space-y-4">
              {beritaLainnya.map((berita) => (
                <Link
                  key={berita.id}
                  href={`/berita/${berita.slug}`}
                  className="flex gap-3 items-start hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                >
                  {berita.gambar_url ? (
                    <img
                      src={berita.gambar_url}
                      alt={berita.judul}
                      className="w-14 h-14 rounded-lg flex-shrink-0 object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 bg-gray-200 rounded-lg flex-shrink-0" />
                  )}
                  <div>
                    <p className="font-semibold text-sm leading-snug line-clamp-2">{berita.judul}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Calendar size={12} /> {formatTanggal(berita.tanggal_publish).toUpperCase()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 text-sm py-6">Belum ada berita lainnya.</p>
          )}

          <Link
            href="/berita"
            className="flex items-center justify-center gap-1 mt-4 bg-gray-100 py-2.5 rounded-full text-sm font-medium hover:bg-gray-200"
          >
            Lihat Semua Berita <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
