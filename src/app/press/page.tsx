import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata = { title: 'Press — Central by Saffron Valley' }

export default function PressPage() {
  return (
    <main className="min-h-screen bg-cream bg-paper-grain py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="In the News" title="Press" className="mb-16" />
      </div>
    </main>
  )
}
