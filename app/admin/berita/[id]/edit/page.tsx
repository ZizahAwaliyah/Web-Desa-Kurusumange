import { supabase } from '@/lib/supabase'
import BeritaForm from '@/components/admin/BeritaForm'
import { notFound } from 'next/navigation'

export default async function EditBeritaPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const { data: berita } = await supabase
    .from('berita')
    .select('*')
    .eq('id', id)
    .single()

  if (!berita) notFound()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Edit Berita</h1>
      <p className="text-gray-500 mb-8">Perbarui informasi berita.</p>
      <BeritaForm initialData={berita} />
    </div>
  )
}
