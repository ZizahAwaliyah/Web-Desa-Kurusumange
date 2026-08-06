'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, Navigation2, Sparkles } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    setLoading(false)

    if (error) {
      setError('Email atau password salah.')
      return
    }

    router.push('/admin/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Panel Kiri — Branding */}
      <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-green-900 to-green-950 text-white p-12 relative overflow-hidden">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <img src="/logo maros.png" alt="Logo" className="h-10 w-10" />
            <span className="font-bold text-lg">Desa Kurusumange</span>
          </div>

          <span className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Sparkles size={12} /> ADMIN ACCESS
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Panel pengelolaan yang rapi, cepat, dan aman.
          </h1>

          <p className="text-green-100 max-w-md">
            Masuk untuk mengelola berita, dokumen PPID, dan galeri Desa Kurusumange dari satu pintu kerja.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-xl p-5 border border-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={18} className="text-yellow-400" />
              <p className="font-semibold text-sm text-white">Akses Terbatas</p>
            </div>
            <p className="text-white/80 text-xs leading-relaxed">Login hanya untuk pengelola yang memiliki akun admin.</p>
          </div>
          <div className="bg-white/10 rounded-xl p-5 border border-white/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Navigation2 size={18} className="text-yellow-400" />
              <p className="font-semibold text-sm text-white">Navigasi Cepat</p>
            </div>
            <p className="text-white/80 text-xs leading-relaxed">Kelola konten desa tanpa berpindah ke banyak halaman.</p>
          </div>
        </div>
      </div>

      {/* Panel Kanan — Form */}
      <div className="flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-sm flex flex-col justify-center">
          <p className="text-green-700 text-xs font-bold tracking-widest mb-2">SELAMAT DATANG</p>
          <h2 className="text-3xl font-bold mb-2">Login Admin Panel</h2>
          <p className="text-gray-500 text-sm mb-8">
            Masukkan email dan kata sandi Anda untuk mengakses dashboard pengelolaan.
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Alamat Email</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition-shadow"
                  placeholder="admin@kurusumange.desa.id"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Kata Sandi</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl pl-11 pr-11 py-3 text-sm focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition-shadow"
                  placeholder="Masukkan kata sandi"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-700 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-green-800 text-white font-medium py-3 rounded-xl hover:bg-green-900 transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? 'Memproses...' : 'Masuk ke Dashboard'}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Kembali ke halaman utama?{' '}
            <Link href="/" className="text-green-700 font-bold hover:underline">
              Beranda
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
