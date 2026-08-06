'use client'

import { useRef, useState } from 'react'
import { UploadCloud, FileText } from 'lucide-react'

export default function FileUpload({
  accept,
  preview,
  fileLabel,
  kind = 'image',
  onFileSelect,
  hint,
}: {
  accept: string
  preview?: string
  fileLabel?: string
  kind?: 'image' | 'file'
  onFileSelect: (file: File) => void
  hint?: string
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0]
    if (file) onFileSelect(file)
  }

  const hasContent = kind === 'image' ? !!preview : !!fileLabel

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {hasContent ? (
        kind === 'image' ? (
          <div className="relative group">
            <img src={preview} alt="Preview" className="w-full h-48 object-cover rounded-lg shadow-sm" />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
            >
              <span className="bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-lg">
                Ganti Foto
              </span>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between rounded-lg px-4 py-3 bg-gray-50">
            <div className="flex items-center gap-2.5 text-sm text-gray-700 min-w-0">
              <FileText size={16} className="text-gray-400 shrink-0" />
              <span className="truncate">{fileLabel}</span>
            </div>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-xs font-medium text-green-800 hover:underline shrink-0 ml-3"
            >
              Ganti File
            </button>
          </div>
        )
      ) : (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragOver(false)
            handleFiles(e.dataTransfer.files)
          }}
          className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-lg py-8 px-4 text-center cursor-pointer transition-colors ${
            dragOver ? 'border-green-600 bg-green-50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          <UploadCloud size={22} className="text-gray-400" />
          <p className="text-sm text-gray-600">
            <span className="font-medium text-green-800">Klik untuk upload</span> atau drag &amp; drop
          </p>
          {hint && <p className="text-xs text-gray-400">{hint}</p>}
        </div>
      )}
    </div>
  )
}
