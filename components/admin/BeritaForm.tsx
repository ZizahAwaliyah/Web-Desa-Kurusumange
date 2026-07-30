'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

function generateSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export default function BeritaForm({
  initialData,
}: {
  initialData?: {
    id: number
    judul: string
    konten: string
    gambar_url: string | null
    tanggal_publish: string
  }
}) {
  const [judul, setJudul] = useState(initialData?.judul || '')
  const [konten, setKonten] = useState(initialData?.konten || '')
  const [tanggalPublish, setTanggalPublish] = useState(
    initialData?.tanggal_publish || new Date().toISOString().split('T')[0]
  )
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
    setLoading(true)

    const supabase = createClient()
    let gambarUrl = initialData?.gambar_url || null

    // Upload foto baru kalau ada file yang dipilih
    if (file) {
      const fileName = `berita/${Date.now()}-${file.name.replace(/\s+/g, '-')}`
      const { error: uploadError } = await supabase.storage
        .from('desa-assets')
        .upload(fileName, file)

      if (uploadError) {
        setError('Gagal upload foto: ' + uploadError.message)
        setLoading(false)
        return
      }

      const { data: urlData } = supabase.storage.from('desa-assets').getPublicUrl(fileName)
      gambarUrl = urlData.publicUrl
    }

    const slug = generateSlug(judul)

    if (isEdit) {
      const { error: updateError } = await supabase
        .from('berita')
        .update({ judul, slug, konten, gambar_url: gambarUrl, tanggal_publish: tanggalPublish })
        .eq('id', initialData.id)

      if (updateError) {
        setError('Gagal menyimpan: ' + updateError.message)
        setLoading(false)
        return
      }
    } else {
      const { error: insertError } = await supabase
        .from('berita')
        .insert({ judul, slug, konten, gambar_url: gambarUrl, tanggal_publish: tanggalPublish })

      if (insertError) {
        setError('Gagal menyimpan: ' + insertError.message)
        setLoading(false)
        return
      }
    }

    setLoading(false)
    router.push('/admin/berita')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl bg-white border rounded-2xl p-6 space-y-5">
      <div>
        <label className="text-sm font-medium block mb-1.5">Judul Berita</label>
        <input
          type="text"
          required
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="Contoh: Musyawarah Perencanaan Pembangunan Desa"
        />
      </div>

      <div>
        <label className="text-sm font-medium block mb-1.5">Tanggal Publish</label>
        <input
          type="date"
          required
          value={tanggalPublish}
          onChange={(e) => setTanggalPublish(e.target.value)}
          className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
        />
      </div>

      <div>
        <label className="text-sm font-medium block mb-1.5">Foto Berita</label>
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

      <div>
        <label className="text-sm font-medium block mb-1.5">Isi Berita</label>
        <p className="text-xs text-gray-400 mb-2">Pisahkan paragraf dengan menekan Enter.</p>
        <textarea
          required
          rows={8}
          value={konten}
          onChange={(e) => setKonten(e.target.value)}
          className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="Tulis isi berita di sini..."
        />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-green-800 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-green-900 disabled:opacity-50"
      >
        {loading ? 'Menyimpan...' : isEdit ? 'Simpan Perubahan' : 'Publikasikan Berita'}
      </button>
    </form>
  )
}
