import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata = { title: 'Gallery — Central by Saffron Valley' }

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-cream bg-paper-grain py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="The Station" title="Gallery" className="mb-16" />
      </div>
    </main>
  )
}
