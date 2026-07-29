import { Mail, Phone } from 'lucide-react'

export default function PersonCard({
  nama, jabatan, email, telepon, foto, featured = false,
}: {
  nama: string
  jabatan: string
  email?: string
  telepon?: string
  foto: string
  featured?: boolean
}) {
  return (
    <div className={`border rounded-2xl p-5 text-center bg-white ${featured ? 'max-w-xs mx-auto' : ''}`}>
      <img
        src={foto}
        alt={nama}
        className={`w-full object-cover rounded-xl mb-4 grayscale ${featured ? 'h-64' : 'h-48'}`}
      />
      <h3 className="font-bold">{nama}</h3>
      <p className="text-green-800 text-xs font-semibold tracking-wide mb-3">{jabatan}</p>
      {(email || telepon) && (
        <div className="border-t pt-3 space-y-1">
          {email && (
            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <Mail size={12} /> {email}
            </p>
          )}
          {telepon && (
            <p className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
              <Phone size={12} /> {telepon}
            </p>
          )}
        </div>
      )}
    </div>
  )
}