import Link from 'next/link'
import { OrnamentalDivider } from '@/components/ui/OrnamentalDivider'

export function Footer() {
  return (
    <footer className="bg-ink text-cream py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block border-4 border-double border-gold px-8 py-4">
          <p className="font-display text-4xl font-light tracking-widest">CENTRAL</p>
          <p className="font-stamp text-gold text-xs tracking-[0.4em] uppercase">by Saffron Valley</p>
        </div>

        <OrnamentalDivider />

        <div className="flex flex-wrap justify-center gap-6 font-stamp text-xs uppercase tracking-widest text-cream/60">
          {[['Menu','/menu'],['Our Story','/our-story'],['Private Dining','/private-dining'],['Gallery','/gallery'],['Gift Cards','/gift-cards'],['Press','/press'],['Contact','/contact']].map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-gold transition-colors">{label}</Link>
          ))}
        </div>

        <div className="space-y-2">
          <p className="font-stamp text-xs text-cream/40 tracking-widest uppercase">Board the Mailing List</p>
          <form className="flex max-w-sm mx-auto gap-0">
            <input type="email" placeholder="your@email.com"
              className="flex-1 bg-transparent border border-gold/40 text-cream font-stamp text-xs px-4 py-3 focus:outline-none focus:border-gold placeholder:text-cream/30" />
            <button type="submit"
              className="bg-gold text-navy font-stamp text-xs uppercase tracking-widest px-4 py-3 hover:bg-cream transition-colors">
              Board
            </button>
          </form>
        </div>

        <OrnamentalDivider />

        <p className="font-stamp text-xs text-cream/30 tracking-widest">
          © 2026 Central by Saffron Valley · 454 E 300 S, Salt Lake City, UT
        </p>
      </div>
    </footer>
  )
}
