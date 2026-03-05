import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata = { title: 'Contact — Central by Saffron Valley' }

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream bg-paper-grain py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="Find Us at the Station" title="Contact" className="mb-16" />
        <div className="text-center font-stamp text-sm text-navy tracking-widest space-y-2">
          <p>454 E 300 S · Salt Lake City, UT 84111</p>
          <p>(385) 267-1949</p>
        </div>
      </div>
    </main>
  )
}
