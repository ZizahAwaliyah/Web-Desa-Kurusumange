import BeritaForm from '@/components/admin/BeritaForm'

export default function TambahBeritaPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Tambah Berita</h1>
      <p className="text-gray-500 mb-8">Publikasikan berita baru untuk warga desa.</p>
      <BeritaForm />
    </div>
  )
}
