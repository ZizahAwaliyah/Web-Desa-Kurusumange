import GaleriForm from '@/components/admin/GaleriForm'

export default function TambahGaleriPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Tambah Foto Galeri</h1>
      <p className="text-gray-500 mb-8">Upload foto dokumentasi kegiatan desa.</p>
      <GaleriForm />
    </div>
  )
}
