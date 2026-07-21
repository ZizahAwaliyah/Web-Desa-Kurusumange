import { supabase } from '@/lib/supabase' 

export default async function Home() {
  const { data, error } = await supabase
    .from('statistik_desa')
    .select('*')

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Test Koneksi Supabase</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}