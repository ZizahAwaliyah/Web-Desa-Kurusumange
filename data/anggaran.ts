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

export const realisasiAnggaranData = {
  tahun: 2025,
  ringkasan: {
    totalPendapatan: { angka: 2510782713, note: 'Target tercapai 100%' },
    totalBelanja:    { angka: 2196169259, note: 'Realisasi 87.5%' },
    surplus:         { angka: 314613454,  note: 'Kondisi Keuangan Sehat' },
  },
  sumberPendapatan: [
    { label: 'Dana Desa (DD)',          angka: 1354900000, warna: 'bg-green-700' },
    { label: 'Alokasi Dana Desa (ADD)', angka: 1117799000, warna: 'bg-green-500' },
    { label: 'Pendapatan Lain-lain',    angka:   32155713, warna: 'bg-yellow-500' },
    { label: 'Pendapatan Asli Desa',    angka:    5928000, warna: 'bg-blue-400' },
  ],
  pembiayaan: [
    { icon: 'Clock',     label: 'SILPA Tahun Sebelumnya', angka:  16838775 },
    { icon: 'Building2', label: 'Penyertaan Modal Desa',  angka: 290400000 },
  ],
  kepalaDesa: {
    nama:  'H. Muh. Ridwan',
    quote: 'Melayani dengan Integritas untuk Kurusumange yang lebih Maju.',
    foto:  '/struktur/kepala-desa.jpg',
  },
  rincianBelanja: [
    {
      id: 1,
      icon: 'Landmark',
      nama: 'Penyelenggaraan Pemerintah Desa',
      deskripsi: 'Gaji, operasional kantor, sarana prasarana',
      total: 1120792259,
      subProgram: [
        { nama: 'Penghasilan Tetap & Tunjangan Kades-Perangkat', angka: 612500000 },
        { nama: 'Tunjangan BPD',                                 angka: 108000000 },
        { nama: 'Operasional Kantor Desa',                       angka: 185300000 },
        { nama: 'Sarana & Prasarana Kantor',                     angka:  94200000 },
        { nama: 'Belanja ATK & Administrasi',                    angka:  62792259 },
        { nama: 'Insentif RT/RW',                                 angka:  58000000 },
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
        { nama: 'Jalan Usaha Tani', angka:  57600000 },
        { nama: 'Kesehatan',        angka: 158355000 },
        { nama: 'Drainase RT 001',  angka:  67970000 },
        { nama: 'Jalan Beton RT 001', angka: 69780000 },
        { nama: 'Informasi Publik', angka:   3997500 },
      ],
      foto: [
        { src: '/realisasi/jalan-beton.jpg',       caption: 'Jalan Beton' },
        { src: '/realisasi/saluran-drainase.jpg',   caption: 'Saluran Drainase' },
        { src: '/realisasi/sarana-kesehatan.jpg',   caption: 'Sarana Kesehatan' },
      ],
    },
    {
      id: 3,
      icon: 'Users',
      nama: 'Pembinaan Kemasyarakatan',
      deskripsi: 'Kegiatan seni, budaya, keagamaan, PKK',
      total: 45955000,
      subProgram: [
        { nama: 'Kegiatan Keagamaan',        angka: 15000000 },
        { nama: 'PKK & Posyandu',            angka: 12455000 },
        { nama: 'Karang Taruna',              angka:  8500000 },
        { nama: 'Pembinaan Seni & Budaya',    angka:  6000000 },
        { nama: 'Olahraga Desa',              angka:  4000000 },
      ],
      foto: [] as { src: string; caption: string }[],
    },
    {
      id: 4,
      icon: 'TrendingUp',
      nama: 'Pemberdayaan Masyarakat',
      deskripsi: 'Pelatihan teknologi, peningkatan kapasitas aparat',
      total: 237184500,
      subProgram: [
        { nama: 'Pelatihan Teknologi Informasi',     angka:  45000000 },
        { nama: 'Peningkatan Kapasitas Aparat Desa',  angka:  62184500 },
        { nama: 'Pemberdayaan UMKM',                  angka:  58000000 },
        { nama: 'Pelatihan Pertanian & Peternakan',   angka:  42000000 },
        { nama: 'Bantuan Modal Usaha Mikro',          angka:  30000000 },
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
        { nama: 'Dana Cadangan Bencana Alam', angka:  70000000 },
        { nama: 'Mitigasi Banjir & Longsor',    angka:  55200000 },
        { nama: 'Bantuan Sosial Darurat',       angka:  35000000 },
        { nama: 'Peralatan Tanggap Darurat',    angka:  17000000 },
        { nama: 'Pelatihan Siaga Bencana',      angka:  10000000 },
      ],
      foto: [] as { src: string; caption: string }[],
    },
  ],
}