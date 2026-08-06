'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Trash2 } from 'lucide-react'

export default function DeleteBeritaButton({ id, gambarUrl }: { id: number; gambarUrl: string | null }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm('Yakin ingin menghapus berita ini?')) return
    setLoading(true)

    const supabase = createClient()

    // Hapus foto dari storage kalau ada
    if (gambarUrl) {
      const path = gambarUrl.split('/desa-assets/')[1]
      if (path) await supabase.storage.from('desa-assets').remove([path])
    }

    await supabase.from('berita').delete().eq('id', id)

    setLoading(false)
    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="p-2 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition-colors disabled:opacity-50"
    >
      <Trash2 size={14} />
    </button>
  )
}