import { RouteMap } from '@/components/RouteMap/RouteMap'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata = { title: 'Our Story — Central by Saffron Valley' }

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-cream bg-paper-grain py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="The Founder's Journey" title="A Love Letter to the Rails" className="mb-4" />
        <p className="font-display text-center text-xl font-light text-charcoal max-w-2xl mx-auto mb-16 italic">
          From the platforms of India to the heart of Salt Lake City — Lavanya Mahate's story, told in stations.
        </p>
        <RouteMap />
      </div>
    </main>
  )
}
