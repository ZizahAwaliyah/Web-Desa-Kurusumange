import { AlertCircle } from 'lucide-react'

export default function ErrorAlert({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
      <AlertCircle size={16} className="shrink-0 mt-0.5" />
      <p>{message}</p>
    </div>
  )
}
