import { SectionHeading } from '@/components/ui/SectionHeading'
import { dispatchPosts } from '@/data/dispatch'
import Link from 'next/link'

export const metadata = { title: 'Railway Dispatch — Central by Saffron Valley' }

export default function DispatchPage() {
  return (
    <main className="min-h-screen bg-cream bg-paper-grain py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-stamp text-navy text-xs uppercase tracking-[0.5em] border-t border-b border-navy py-2 mb-4">
            THE RAILWAY DISPATCH — Est. 2024 — Salt Lake City, Utah
          </p>
          <h1 className="font-display text-6xl font-light text-ink">Railway Dispatch</h1>
        </div>
        <div className="space-y-8">
          {dispatchPosts.map(post => (
            <article key={post.id} className="border-b border-gold/30 pb-8">
              <span className="font-stamp text-xs bg-navy text-gold px-3 py-1 uppercase tracking-widest">{post.category}</span>
              <h2 className="font-display text-3xl font-light text-ink mt-3 mb-2">{post.title}</h2>
              <p className="font-stamp text-gold text-xs tracking-widest mb-3">{post.date}</p>
              <p className="font-body text-charcoal">{post.excerpt}</p>
              <Link href={`/railway-dispatch/${post.slug}`} className="font-stamp text-xs text-navy uppercase tracking-widest hover:text-gold mt-3 inline-block">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
