import DokumenPpidForm from '@/components/admin/DokumenPpidForm'

export default function TambahDokumenPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Tambah Dokumen PPID</h1>
      <p className="text-gray-500 mb-8">Upload dokumen informasi publik baru.</p>
      <DokumenPpidForm />
    </div>
  )
}
