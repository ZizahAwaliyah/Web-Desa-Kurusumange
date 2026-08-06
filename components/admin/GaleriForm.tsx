'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import FileUpload from '@/components/admin/ui/FileUpload'
import ErrorAlert from '@/components/admin/ui/ErrorAlert'
import FormActions from '@/components/admin/ui/FormActions'

export default function GaleriForm({
  initialData,
}: {
  initialData?: {
    id: number
    judul: string
    kategori: string | null
    gambar_url: string
  }
}) {
  const [judul, setJudul] = useState(initialData?.judul || '')
  const [kategori, setKategori] = useState(initialData?.kategori || '')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState(initialData?.gambar_url || '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  const isEdit = !!initialData

  const handleFileSelect = (selected: File) => {
    setFile(selected)
    setPreview(URL.createObjectURL(selected))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!isEdit && !file) {
      setError('Foto wajib diupload.')
      return
    }

    setLoading(true)
    const supabase = createClient()
    let gambarUrl = initialData?.gambar_url || ''

    if (file) {
      const filePath = `galeri/${Date.now()}-${file.name.replace(/\s+/g, '-')}`
      const { error: uploadError } = await supabase.storage
        .from('desa-assets')
        .upload(filePath, file)

      if (uploadError) {
        setError('Gagal upload foto: ' + uploadError.message)
        setLoading(false)
        return
      }

      const { data: urlData } = supabase.storage.from('desa-assets').getPublicUrl(filePath)
      gambarUrl = urlData.publicUrl
    }

    const payload = { judul, kategori: kategori || null, gambar_url: gambarUrl }

    if (isEdit) {
      const { error: updateError } = await supabase
        .from('galeri')
        .update(payload)
        .eq('id', initialData.id)

      if (updateError) {
        setError('Gagal menyimpan: ' + updateError.message)
        setLoading(false)
        return
      }
    } else {
      const { error: insertError } = await supabase.from('galeri').insert(payload)

      if (insertError) {
        setError('Gagal menyimpan: ' + insertError.message)
        setLoading(false)
        return
      }
    }

    setLoading(false)
    router.push('/admin/galeri')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-2xl p-8 space-y-6 shadow-sm">
      <div>
        <label className="text-sm font-medium block mb-1.5">Judul Foto</label>
        <input
          type="text"
          required
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="Contoh: Kegiatan Posyandu Balita"
        />
      </div>

      <div>
        <label className="text-sm font-medium block mb-1.5">Kategori (opsional)</label>
        <input
          type="text"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="Contoh: Kesehatan, Kegiatan, Pelatihan"
        />
      </div>

      <div>
        <label className="text-sm font-medium block mb-1.5">Foto</label>
        <FileUpload
          accept="image/*"
          kind="image"
          preview={preview}
          onFileSelect={handleFileSelect}
          hint="PNG atau JPG"
        />
      </div>

      {error && <ErrorAlert message={error} />}

      <FormActions
        loading={loading}
        submitLabel={isEdit ? 'Simpan Perubahan' : 'Tambah Foto'}
        loadingLabel="Menyimpan..."
        cancelHref="/admin/galeri"
      />
    </form>
  )
}
