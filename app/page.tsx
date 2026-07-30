import HeroSection from '@/components/sections/HeroSection'
import SambutanSection from '@/components/sections/SambutanSection'
import GaleriPotensiSection from '@/components/sections/GaleriPotensiSection'
import BeritaHomeSection from '@/components/sections/BeritaHomeSection'
import SaranaPrasaranaSection from '@/components/sections/SaranaPrasaranaSection'
import AksesLayananSection from '@/components/sections/AksesLayananSection'


export default function Home() {
  return (
    <div>
      <HeroSection />
      <SambutanSection />
      <GaleriPotensiSection />
      <BeritaHomeSection />
      <SaranaPrasaranaSection />
      <AksesLayananSection />
    </div>
  )
}