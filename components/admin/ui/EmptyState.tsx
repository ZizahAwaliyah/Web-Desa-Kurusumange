import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  icon: LucideIcon
  title: string
  description: string
  actionLabel?: string
  actionHref?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="w-14 h-14 rounded-2xl bg-gray-100 text-gray-400 flex items-center justify-center mb-4">
        <Icon size={24} />
      </div>
      <p className="font-medium text-gray-700 mb-1">{title}</p>
      <p className="text-sm text-gray-500 mb-5 max-w-sm">{description}</p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="text-sm font-medium text-green-800 hover:text-green-900 hover:underline"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
