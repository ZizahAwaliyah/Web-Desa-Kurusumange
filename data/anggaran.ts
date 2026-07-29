export const anggaranInfo = {
  tahun: 2026,
  totalAnggaran: 'Rp 2,4 Miliar',
  alokasi: [
    { label: 'Pendapatan Desa', sub: 'PAD & Dana Transfer', persen: 60, warna: '#1d4ed8' },
    { label: 'Belanja Desa', sub: 'Operasional & Gaji', persen: 30, warna: '#166534' },
    { label: 'Pembiayaan', sub: 'Sisa Lebih Perhitungan Anggaran', persen: 10, warna: '#eab308' },
  ],
}

export const realisasiProgram = [
  {
    nama: 'Pembangunan Jalan Dusun III',
    deskripsi: 'Aspal Hotmix sepanjang 1.2 KM',
    persen: 80,
    target: 'Rp 450jt',
    aktual: 'Rp 360jt',
    warna: 'bg-blue-700',
  },
  {
    nama: 'Renovasi Posyandu Mawar',
    deskripsi: 'Fasilitas kesehatan ibu dan anak',
    persen: 100,
    target: 'Rp 75jt',
    aktual: 'Rp 75jt',
    warna: 'bg-green-800',
  },
  {
    nama: 'Normalisasi Drainase Utama',
    deskripsi: 'Pencegahan banjir musim hujan',
    persen: 60,
    target: 'Rp 120jt',
    aktual: 'Rp 72jt',
    warna: 'bg-yellow-500',
  },
]

export const dokumenPublikAnggaran = [
  { nama: 'RPJMDes 2021-2027', sub: 'Rencana Pembangunan Jangka Menengah', tahun: 2021, ukuran: '4.2 MB', file: '/dokumen/rpjmdes.pdf' },
  { nama: 'RKPDes Tahun 2024', sub: 'Rencana Kerja Pemerintah Desa', tahun: 2024, ukuran: '2.8 MB', file: '/dokumen/rkpdes.pdf' },
  { nama: 'Laporan Realisasi Semester I', sub: 'Realisasi APBDes Tahun Anggaran 2024', tahun: 2024, ukuran: '1.5 MB', file: '/dokumen/laporan-semester-1.pdf' },
  { nama: 'Profil Desa Kurusumange 2023', sub: 'Data demografi dan potensi ekonomi', tahun: 2023, ukuran: '6.7 MB', file: '/dokumen/profil-desa-2023.pdf' },
]
