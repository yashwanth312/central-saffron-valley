import { Hero } from '@/components/sections/Hero'
import { FeaturedDishes } from '@/components/sections/FeaturedDishes'
import { DiningSpaces } from '@/components/sections/DiningSpaces'
import { Testimonials } from '@/components/sections/Testimonials'
import { StationBoard } from '@/components/sections/StationBoard'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedDishes />
      <DiningSpaces />
      <Testimonials />
      <StationBoard />
    </main>
  )
}
