import { supabase } from '@/lib/supabase'
import DokumenPpidForm from '@/components/admin/DokumenPpidForm'
import { notFound } from 'next/navigation'

export default async function EditDokumenPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const { data: dokumen } = await supabase
    .from('dokumen_ppid')
    .select('*')
    .eq('id', id)
    .single()

  if (!dokumen) notFound()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Edit Dokumen PPID</h1>
      <p className="text-gray-500 mb-8">Perbarui informasi dokumen.</p>
      <DokumenPpidForm initialData={dokumen} />
    </div>
  )
}
