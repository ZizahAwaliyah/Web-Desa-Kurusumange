'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Trash2 } from 'lucide-react'

export default function DeleteGaleriButton({ id, gambarUrl }: { id: number; gambarUrl: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm('Yakin ingin menghapus foto ini?')) return
    setLoading(true)

    const supabase = createClient()

    const path = gambarUrl.split('/desa-assets/')[1]
    if (path) await supabase.storage.from('desa-assets').remove([path])

    const { error } = await supabase.from('galeri').delete().eq('id', id)

    setLoading(false)

    if (error) {
      alert(`Gagal menghapus foto: ${error.message}`)
      return
    }

    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="flex-1 flex items-center justify-center gap-1 p-2 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition-colors text-xs disabled:opacity-50"
    >
      <Trash2 size={13} /> Hapus
    </button>
  )
}
