import { Hero } from '@/components/sections/Hero'
import { ExperienceCentral } from '@/components/sections/ExperienceCentral'
import { FeaturedDishes } from '@/components/sections/FeaturedDishes'
import { DiningSpaces } from '@/components/sections/DiningSpaces'
import { FounderSpotlight } from '@/components/sections/FounderSpotlight'
import { BarShowcase } from '@/components/sections/BarShowcase'
import { Testimonials } from '@/components/sections/Testimonials'
import { StationBoard } from '@/components/sections/StationBoard'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ExperienceCentral />
      <FeaturedDishes />
      <BarShowcase />
      <DiningSpaces />
      <FounderSpotlight />
      <Testimonials />
      <StationBoard />
    </main>
  )
}
