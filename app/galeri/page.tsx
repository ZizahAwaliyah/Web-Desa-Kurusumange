import { supabase } from '@/lib/supabase'
import GaleriSection from '@/components/sections/GaleriSection'

export const dynamic = 'force-dynamic'

export default async function GaleriPage() {
  const { data: galeriDesa } = await supabase
    .from('galeri')
    .select('*')
    .order('created_at', { ascending: false })

  return <GaleriSection galeriDesa={galeriDesa || []} />
}
