import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

const colorMap = {
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  yellow: 'bg-yellow-100 text-yellow-700',
} as const

export default function StatCard({
  icon: Icon,
  value,
  label,
  color,
  href,
  linkLabel,
}: {
  icon: LucideIcon
  value: number
  label: string
  color: keyof typeof colorMap
  href: string
  linkLabel: string
}) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${colorMap[color]}`}>
        <Icon size={20} />
      </div>
      <p className="text-3xl font-bold mb-1 tabular-nums">{value.toLocaleString('id-ID')}</p>
      <p className="text-gray-500 text-sm mb-4">{label}</p>
      <Link
        href={href}
        className="text-sm font-medium text-green-800 group-hover:text-green-900 group-hover:underline"
      >
        {linkLabel} &rarr;
      </Link>
    </div>
  )
}
