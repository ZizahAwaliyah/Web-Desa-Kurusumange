import { supabase } from '@/lib/supabase'
import GaleriForm from '@/components/admin/GaleriForm'
import { notFound } from 'next/navigation'

export default async function EditGaleriPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const { data: foto } = await supabase
    .from('galeri')
    .select('*')
    .eq('id', id)
    .single()

  if (!foto) notFound()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Edit Foto Galeri</h1>
      <p className="text-gray-500 mb-8">Perbarui informasi foto.</p>
      <GaleriForm initialData={foto} />
    </div>
  )
}
