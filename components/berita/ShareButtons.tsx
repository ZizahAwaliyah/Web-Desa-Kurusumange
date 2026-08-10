'use client'

import { Send, Camera, Link2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ShareButtons({ judul }: { judul: string }) {
  const [copied, setCopied] = useState(false)
  
  // 1. Siapkan state untuk URL, biarkan string kosong di awal
  const [currentUrl, setCurrentUrl] = useState('')

  // 2. Ambil URL browser hanya setelah render pertama selesai (hanya berjalan di sisi klien)
  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const handleCopy = () => {
    // Kita juga bisa menggunakan currentUrl di sini karena sudah pasti terisi
    navigator.clipboard.writeText(currentUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex gap-2">
      
      <a
        // Gunakan currentUrl yang aman untuk hydration
        href={`https://wa.me/?text=${encodeURIComponent(judul + ' - ' + currentUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-green-50 text-green-700 text-sm px-3 py-1.5 rounded-lg hover:bg-green-100 transition-colors"
      >
        <Send size={14} /> WhatsApp
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-pink-50 text-pink-700 text-sm px-3 py-1.5 rounded-lg hover:bg-pink-100 transition-colors"
      >
        <Camera size={14} /> Instagram
      </a>

      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
      >
        <Link2 size={14} /> {copied ? 'Tersalin!' : 'Salin Link'}
      </button>
    </div>
  )
}
