'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function FormActions({
  loading,
  submitLabel,
  loadingLabel,
  cancelHref,
}: {
  loading: boolean
  submitLabel: string
  loadingLabel: string
  cancelHref: string
}) {
  return (
    <div className="flex items-center gap-3 pt-1">
      <button
        type="submit"
        disabled={loading}
        className="flex items-center gap-2 bg-green-800 text-white font-medium px-6 py-2.5 rounded-lg text-sm hover:bg-green-900 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading && <Loader2 size={16} className="animate-spin" />}
        {loading ? loadingLabel : submitLabel}
      </button>
      <Link
        href={cancelHref}
        className="text-sm font-medium text-gray-500 px-4 py-2.5 rounded-lg hover:bg-gray-100"
      >
        Batal
      </Link>
    </div>
  )
}
