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

    await supabase.from('galeri').delete().eq('id', id)

    setLoading(false)
    router.refresh()
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="flex-1 flex items-center justify-center gap-1 p-2 border rounded-lg text-red-600 hover:bg-red-50 text-xs disabled:opacity-50"
    >
      <Trash2 size={13} /> Hapus
    </button>
  )
}
