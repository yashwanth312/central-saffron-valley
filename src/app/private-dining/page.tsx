import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata = { title: 'Private Dining — Central by Saffron Valley' }

export default function PrivateDiningPage() {
  return (
    <main className="min-h-screen bg-cream bg-paper-grain py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="Exclusive Reservations" title="Private Dining" className="mb-16" />
        {/* DiningSpaces cards + inquiry form */}
      </div>
    </main>
  )
}
