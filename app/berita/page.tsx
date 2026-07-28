import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const ITEMS_PER_PAGE = 6

function formatTanggal(tanggal: string) {
  return new Date(tanggal).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default async function BeritaPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const currentPage = Number(params.page) || 1

  // Ambil berita terbaru sebagai featured
  const { data: featured } = await supabase
    .from('berita')
    .select('*')
    .order('tanggal_publish', { ascending: false })
    .limit(1)
    .single()

  // Ambil total berita (untuk hitung total halaman)
  const { count } = await supabase
    .from('berita')
    .select('*', { count: 'exact', head: true })

  const totalPages = Math.max(1, Math.ceil(((count || 1) - 1) / ITEMS_PER_PAGE))

  // Ambil berita untuk grid (kecuali yang featured), dengan pagination
  const from = (currentPage - 1) * ITEMS_PER_PAGE + 1
  const to = from + ITEMS_PER_PAGE - 1

  const { data: beritaList } = await supabase
    .from('berita')
    .select('*')
    .order('tanggal_publish', { ascending: false })
    .range(from, to)

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Berita Terkini Desa Kurusumange</h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Dapatkan informasi terbaru mengenai pembangunan, kegiatan warga, dan kebijakan pemerintah desa demi transparansi dan kemajuan bersama.
      </p>

      {/* Featured Berita */}
      {featured && currentPage === 1 && (
        <Link
          href={`/berita/${featured.slug}`}
          className="block border rounded-2xl p-8 mb-8 hover:shadow-lg transition-shadow grid md:grid-cols-2 gap-6"
        >
          {featured.gambar_url ? (
            <img src={featured.gambar_url} alt={featured.judul} className="rounded-xl w-full h-56 object-cover" />
          ) : (
            <div className="bg-gray-100 rounded-xl h-56" />
          )}
          <div>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-1"><Calendar size={14} /> {formatTanggal(featured.tanggal_publish)}</span>
              <span className="flex items-center gap-1"><User size={14} /> Admin Desa</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">{featured.judul}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{featured.konten}</p>
            <span className="text-green-700 font-medium flex items-center gap-1">
              Baca Selengkapnya <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      )}

      {/* Grid Berita */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {beritaList?.map((berita) => (
          <Link
            key={berita.id}
            href={`/berita/${berita.slug}`}
            className="border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            {berita.gambar_url ? (
              <img src={berita.gambar_url} alt={berita.judul} className="w-full h-44 object-cover" />
            ) : (
              <div className="bg-gray-100 h-44" />
            )}
            <div className="p-5">
              <p className="text-xs text-gray-500 flex items-center gap-1 mb-2">
                <Calendar size={12} /> {formatTanggal(berita.tanggal_publish)}
              </p>
              <h3 className="font-bold mb-2 line-clamp-2">{berita.judul}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{berita.konten}</p>
              <span className="text-green-700 text-sm font-medium flex items-center gap-1">
                Baca Selengkapnya <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {!beritaList?.length && !featured && (
        <p className="text-gray-500 text-center py-10">Belum ada berita yang dipublikasikan.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <Link
            href={`/berita?page=${Math.max(1, currentPage - 1)}`}
            className="w-9 h-9 flex items-center justify-center border rounded-lg hover:bg-gray-50"
          >
            <ChevronLeft size={16} />
          </Link>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`/berita?page=${p}`}
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm ${
                p === currentPage ? 'bg-green-800 text-white' : 'border hover:bg-gray-50'
              }`}
            >
              {p}
            </Link>
          ))}
          <Link
            href={`/berita?page=${Math.min(totalPages, currentPage + 1)}`}
            className="w-9 h-9 flex items-center justify-center border rounded-lg hover:bg-gray-50"
          >
            <ChevronRight size={16} />
          </Link>
        </div>
      )}
    </div>
  )
}