'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      setPreview(URL.createObjectURL(selected))
    }
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
    <form onSubmit={handleSubmit} className="max-w-xl bg-white border rounded-2xl p-6 space-y-5">
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
        {preview && (
          <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-3" />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full border rounded-lg px-4 py-2.5 text-sm"
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-green-800 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-green-900 disabled:opacity-50"
      >
        {loading ? 'Menyimpan...' : isEdit ? 'Simpan Perubahan' : 'Tambah Foto'}
      </button>
    </form>
  )
}
