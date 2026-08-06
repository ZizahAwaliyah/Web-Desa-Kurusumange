import { Eye, Rocket } from 'lucide-react'
import { visiPpid, misiPpid } from '@/data/struktur-ppid'

export default function VisiMisiPpidSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-14">
      <div className="text-center mb-10">
        <p className="text-blue-600 text-sm font-semibold tracking-wide mb-2">KOMITMEN KAMI</p>
        <h2 className="text-3xl font-bold text-green-900 relative inline-block">
          Visi & Misi PPID
          <span className="block w-16 h-1 bg-yellow-500 mx-auto mt-3 rounded-full" />
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="bg-green-800 text-white w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Eye size={24} />
          </div>
          <h3 className="font-bold text-lg mb-4">Visi</h3>
          <p className="text-gray-600 italic">{visiPpid}</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
              <Rocket size={20} />
            </div>
            <h3 className="font-bold text-lg text-blue-700">Misi Kami</h3>
          </div>
          <ol className="space-y-4">
            {misiPpid.map((misi, i) => (
              <li key={i} className="flex gap-3">
                <span className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-gray-600 text-sm">{misi}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
