export const anggaranInfo = {
  tahun: 2026,
  totalAnggaran: 'Rp 1,2 Miliar',
  alokasi: [
    { label: 'Pendapatan Desa', sub: 'PAD & Dana Transfer', persen: 60, warna: '#1d4ed8' },
    { label: 'Belanja Desa', sub: 'Operasional & Gaji', persen: 30, warna: '#166534' },
    { label: 'Pembiayaan', sub: 'Sisa Lebih Perhitungan Anggaran', persen: 10, warna: '#eab308' },
  ],
}

export const realisasiProgram = [
  {
    nama: 'Penyelenggaraan Pemerintah Desa',
    persen: 100,
    aktual: 'Rp 924jt',
    warna: 'bg-blue-700',
  },
  {
    nama: 'Pelaksanaan Pembangunan Desa',
    persen: 100,
    aktual: 'Rp 328jt',
    warna: 'bg-green-800',
  },
  {
    nama: 'Pembinaan Kemasyarakatan Desa',
    persen: 100,
    aktual: 'Rp 20jt',
    warna: 'bg-yellow-500',
  },
  {
    nama: 'Pemberdayaan Masyarakat Desa',
    persen: 100,
    aktual: 'Rp 8jt',
    warna: 'bg-pink-500',
  },
  {
    nama: 'Penanggulangan Bencana & Darurat',
    persen: 0,
    aktual: 'Rp 0',
    warna: 'bg-orange-500',
  },
]

export const dokumenPublikAnggaran = [
  { nama: 'RPJMDes 2021-2027', sub: 'Rencana Pembangunan Jangka Menengah', tahun: 2021, ukuran: '4.2 MB', file: '/dokumen/rpjmdes.pdf' },
  { nama: 'RKPDes Tahun 2024', sub: 'Rencana Kerja Pemerintah Desa', tahun: 2024, ukuran: '2.8 MB', file: '/dokumen/rkpdes.pdf' },
  { nama: 'Laporan Realisasi Semester I', sub: 'Realisasi APBDes Tahun Anggaran 2024', tahun: 2024, ukuran: '1.5 MB', file: '/dokumen/laporan-semester-1.pdf' },
  { nama: 'Profil Desa Kurusumange 2023', sub: 'Data demografi dan potensi ekonomi', tahun: 2023, ukuran: '6.7 MB', file: '/dokumen/profil-desa-2023.pdf' },
]

export const realisasiAnggaranData = {
  tahun: 2025,
  ringkasan: {
    totalPendapatan: { angka: 2510782713, note: 'Target tercapai 100%' },
    totalBelanja:    { angka: 2196169259, note: 'Realisasi 87.5%' },
    surplus:         { angka: 314613454,  note: 'Kondisi Keuangan Sehat' },
  },
  sumberPendapatan: [
    { label: 'Dana Desa (DD)',          angka: 1354900000, warna: 'bg-green-700' },
    { label: 'Alokasi Dana Desa (ADD)', angka: 1131799000, warna: 'bg-green-500' },
    { label: 'Pendapatan Lain-lain',    angka:   18155713, warna: 'bg-yellow-500' },
    { label: 'Pendapatan Asli Desa',    angka:    5928000, warna: 'bg-blue-400' },
  ],
  pembiayaan: [
    { icon: 'Clock',     label: 'SILPA Tahun Sebelumnya', angka:  16838775 },
    { icon: 'Building2', label: 'Penyertaan Modal Desa',  angka: 290400000 },
  ],
  kepalaDesa: {
    nama:  'H. Muh. Ridwan',
    quote: 'Melayani dengan Integritas untuk Kurusumange yang lebih Maju.',
    foto:  '/kepaladesa.jpg',
  },
  rincianBelanja: [
    {
      id: 1,
      icon: 'Landmark',
      nama: 'Penyelenggaraan Pemerintah Desa',
      deskripsi: 'Gaji, operasional kantor, sarana prasarana',
      total: 1120792259,
      subProgram: [
        { nama: 'Penyelenggaraan Belanja Siltap,Tunjangan dan Operasional Pemerintah Desa', angka: 858439259 },
        { nama: 'Bidang Sarana dan Prasarana Pemerintah Desa', angka: 64955000 },
        { nama: 'Bidang Tata Praja Pemerintahan,Perencanan,Keuangan&Pelaporan', angka: 62398000 },
      ],
      foto: [] as { src: string; caption: string }[],
    },
    {
      id: 2,
      icon: 'Wrench',
      nama: 'Pelaksanaan Pembangunan Desa',
      deskripsi: 'Pembangunan infrastruktur & sosial',
      total: 605037500,
      subProgram: [
        { nama: 'Pendidikan',       angka:  93600000 },
        { nama: 'Jalan Beton RT 001 Dusun Bira-Bira', angka:  57600000 },
        { nama: 'Kesehatan',        angka: 158355000 },
        { nama: 'Perintisan dan Perkerasan Jalan Tani RT 001 Dusun Ka`bung',  angka:  75935000 },
        { nama: 'Paving Blok RT 001 Dusun Panasakkang', angka: 69780000 },
        { nama: 'Perkerasan Jalan Tani RT 001 Dusun Majannang', angka:   77800000 },
        { nama: 'Pembangunan Drainase Dusun RT 001', angka:   67970000 },
        { nama: 'Perhubungan, Komunikasi dan Informatika', angka:   3997500 },
      ],
      foto: [
        { src: '/jalan-beton.jpg',       caption: 'Jalan Beton' },
        { src: '/saluran-drainase.jpg',   caption: 'Saluran Drainase' },
        { src: '/sarana-kesehatan.jpg',   caption: 'Sarana Kesehatan' },
        { src: '/sarana-informatika.jpg',   caption: 'Sarana Informatika' },
        { src: '/sarana-drainase.jpg',   caption: 'Sarana Drainase' }
      ],
    },
    {
      id: 3,
      icon: 'Users',
      nama: 'Pembinaan Kemasyarakatan Desa',
      deskripsi: 'Kegiatan seni, budaya, keagamaan, PKK',
      total: 45955000,
      subProgram: [
        { nama: 'Sosialisasi kepada Masyarakat di Bidang Hukum dan Perlidungan Masyarakat',        angka: 10955000 },
        { nama: 'Bidang Kebudayaan dan Keagamaan',       angka: 15000000 },
        { nama: 'Bidang Kelembagaan Masyarakat',              angka:  20000000 },
      ],
      foto: [] as { src: string; caption: string }[],
    },
    {
      id: 4,
      icon: 'TrendingUp',
      nama: 'Pemberdayaan Masyarakat Desa',
      deskripsi: 'Pelatihan teknologi, peningkatan kapasitas aparat',
      total: 237184500,
      subProgram: [
        { nama: 'Pemeliharaan Saluran Irigasi Tersier/Sederhana',        angka: 153005000 },
        { nama: 'Lanjutan Transmigrasi RT OO3 Dusun Panasakkang',       angka: 145700000 },
        { nama: 'Penggunaan Teknologi Tepat Guna',              angka:  7305000 },
        { nama: 'Bidang Peningkatan Kapasitas Aparatur Desa',    angka:  84179500 },
        { nama: 'Peningkatan Kapasitas Kepala Desa',    angka:  42580000 },
        { nama: 'Peningkatan Kapasitas Perangkat Desa',    angka:  28280000 },
        { nama: 'Peningkatan Kapasitas BPD',    angka:  13319500 },
      ],
      foto: [] as { src: string; caption: string }[],
    },
    {
      id: 5,
      icon: 'ShieldAlert',
      nama: 'Penanggulangan Bencana & Darurat',
      deskripsi: 'Dana keadaan mendesak & mitigasi bencana',
      total: 187200000,
      subProgram: [
        { nama: 'Bidang Keadaan Mendesak', angka: 187200000 },
      ],
      foto: [] as { src: string; caption: string }[],
    },
  ],
}