'use client'

import { Share2, MessageCircle, Link2 } from 'lucide-react'
import { useState } from 'react'

export default function ShareButtons({ judul }: { judul: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const url = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="flex gap-2">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-lg hover:bg-blue-100"
      >
        <Share2 size={14} /> Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(judul)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-lg hover:bg-blue-100"
      >
        <MessageCircle size={14} /> Twitter
      </a>
      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-lg hover:bg-blue-100"
      >
        <Link2 size={14} /> {copied ? 'Tersalin!' : 'Salin Link'}
      </button>
    </div>
  )
}