'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const kategoriOptions = ['Berkala', 'Setiap Saat', 'Serta Merta']

export default function DokumenPpidForm({
  initialData,
}: {
  initialData?: {
    id: number
    nama_dokumen: string
    kategori: string
    tahun: number | null
    file_url: string
    terkait_anggaran: boolean
  }
}) {
  const [namaDokumen, setNamaDokumen] = useState(initialData?.nama_dokumen || '')
  const [kategori, setKategori] = useState(initialData?.kategori || 'Berkala')
  const [tahun, setTahun] = useState(initialData?.tahun?.toString() || '')
  const [terkaitAnggaran, setTerkaitAnggaran] = useState(initialData?.terkait_anggaran || false)
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState(initialData?.file_url ? 'File sudah ada' : '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  const isEdit = !!initialData

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      setFileName(selected.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!isEdit && !file) {
      setError('File PDF wajib diupload.')
      return
    }

    setLoading(true)
    const supabase = createClient()
    let fileUrl = initialData?.file_url || ''

    if (file) {
      const filePath = `dokumen-ppid/${Date.now()}-${file.name.replace(/\s+/g, '-')}`
      const { error: uploadError } = await supabase.storage
        .from('desa-assets')
        .upload(filePath, file)

      if (uploadError) {
        setError('Gagal upload file: ' + uploadError.message)
        setLoading(false)
        return
      }

      const { data: urlData } = supabase.storage.from('desa-assets').getPublicUrl(filePath)
      fileUrl = urlData.publicUrl
    }

    const payload = {
      nama_dokumen: namaDokumen,
      kategori,
      tahun: tahun ? Number(tahun) : null,
      file_url: fileUrl,
      terkait_anggaran: terkaitAnggaran,
    }

    if (isEdit) {
      const { error: updateError } = await supabase
        .from('dokumen_ppid')
        .update(payload)
        .eq('id', initialData.id)

      if (updateError) {
        setError('Gagal menyimpan: ' + updateError.message)
        setLoading(false)
        return
      }
    } else {
      const { error: insertError } = await supabase.from('dokumen_ppid').insert(payload)

      if (insertError) {
        setError('Gagal menyimpan: ' + insertError.message)
        setLoading(false)
        return
      }
    }

    setLoading(false)
    router.push('/admin/ppid')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl bg-white border rounded-2xl p-6 space-y-5">
      <div>
        <label className="text-sm font-medium block mb-1.5">Nama Dokumen</label>
        <input
          type="text"
          required
          value={namaDokumen}
          onChange={(e) => setNamaDokumen(e.target.value)}
          className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
          placeholder="Contoh: Laporan Realisasi APBDes Semester I"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium block mb-1.5">Kategori</label>
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            {kategoriOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium block mb-1.5">Tahun (opsional)</label>
          <input
            type="number"
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
            className="w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
            placeholder="2026"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium block mb-1.5">File Dokumen (PDF)</label>
        {fileName && <p className="text-sm text-gray-500 mb-2">📄 {fileName}</p>}
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="w-full border rounded-lg px-4 py-2.5 text-sm"
        />
      </div>

      <label className="flex items-center gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          checked={terkaitAnggaran}
          onChange={(e) => setTerkaitAnggaran(e.target.checked)}
          className="w-4 h-4"
        />
        <span className="text-sm">Tampilkan juga di halaman Transparansi Anggaran</span>
      </label>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-green-800 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-green-900 disabled:opacity-50"
      >
        {loading ? 'Menyimpan...' : isEdit ? 'Simpan Perubahan' : 'Simpan Dokumen'}
      </button>
    </form>
  )
}
