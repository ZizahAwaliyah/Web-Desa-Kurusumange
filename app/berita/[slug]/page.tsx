import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { Calendar, User, Home } from 'lucide-react'
import ShareButtons from '@/components/berita/ShareButtons'

function formatTanggal(tanggal: string) {
  return new Date(tanggal).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  })
}

export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { data: berita } = await supabase
    .from('berita')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!berita) {
    return <div className="max-w-4xl mx-auto px-6 py-20 text-center text-gray-500">Berita tidak ditemukan.</div>
  }

  const { data: beritaLainnya } = await supabase
    .from('berita')
    .select('*')
    .neq('slug', slug)
    .order('tanggal_publish', { ascending: false })
    .limit(3)

  // Pecah konten jadi paragraf berdasarkan baris kosong
  const paragraf = berita.konten.split('\n').filter((p: string) => p.trim() !== '')

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="flex items-center gap-1 hover:text-gray-700">
          <Home size={14} /> Beranda
        </Link>
        <span>&gt;</span>
        <Link href="/berita" className="hover:text-gray-700">Berita Desa</Link>
        <span>&gt;</span>
        <span className="text-gray-700 font-medium">Detail Berita</span>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span className="flex items-center gap-1"><Calendar size={14} /> {formatTanggal(berita.tanggal_publish)}</span>
        <span className="flex items-center gap-1"><User size={14} /> Admin Desa</span>
      </div>

      <h1 className="text-3xl font-bold mb-6">{berita.judul}</h1>

      {berita.gambar_url && (
        <img src={b.gambar_url} alt={b.judul} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
      )}

      <div className="prose max-w-none text-gray-700 space-y-4 mb-10">
        {paragraf.map((p: string, i: number) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
        <p className="font-medium">Bagikan artikel ini:</p>
        <ShareButtons judul={berita.judul} />
      </div>

      {/* Berita Lainnya */}
      {beritaLainnya && beritaLainnya.length > 0 && (
        <div className="mt-14">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold">Berita Lainnya</h2>
            <Link href="/berita" className="text-sm text-green-700 font-medium">Lihat Semua Berita →</Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {beritaLainnya.map((b) => (
              <Link key={b.id} href={`/berita/${b.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {b.gambar_url ? (
                  <img src={b.gambar_url} alt={b.judul} className="w-full h-32 object-cover" />
                ) : (
                  <div className="bg-gray-100 h-32" />
                )}
                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-1">{formatTanggal(b.tanggal_publish)}</p>
                  <p className="font-semibold text-sm line-clamp-2">{b.judul}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}