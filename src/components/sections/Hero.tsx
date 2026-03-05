'use client'
import Link from 'next/link'
import { DepartureBoard } from '@/components/DepartureBoard/DepartureBoard'
import { OrnamentalDivider } from '@/components/ui/OrnamentalDivider'
import { menu } from '@/data/menu'

const boardItems = menu
  .filter(d => d.featured)
  .map(d => ({ label: d.name.toUpperCase(), sublabel: `${d.platform} · ${d.service} · ${d.price}` }))

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-navy overflow-hidden">
      {/* Background hatch texture */}
      <div className="absolute inset-0 bg-hatch opacity-5" aria-hidden />

      {/* Gold top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />

      <div className="relative z-10 text-center px-6 space-y-8 max-w-4xl">
        {/* Stamp label */}
        <p className="font-stamp text-gold text-sm uppercase tracking-[0.4em]">
          454 E 300 S · Salt Lake City, Utah
        </p>

        {/* Main heading */}
        <h1 className="font-display text-cream text-7xl md:text-9xl font-light leading-none tracking-wide">
          Central
        </h1>
        <p className="font-stamp text-gold text-sm uppercase tracking-[0.6em]">by Saffron Valley</p>

        {/* Tagline */}
        <p className="font-display text-cream text-2xl md:text-3xl font-light italic">
          &ldquo;Flavor, Story, Soul &amp; Nostalgia&rdquo;
        </p>

        <OrnamentalDivider className="text-gold" />

        {/* Departure board */}
        <div className="max-w-lg mx-auto">
          <p className="font-stamp text-gold text-xs uppercase tracking-widest mb-3">Today's Departures</p>
          <DepartureBoard items={boardItems} />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/reservations"
            className="font-stamp text-xs uppercase tracking-widest bg-gold text-navy px-8 py-4 hover:bg-cream transition-colors">
            Reserve a Table
          </Link>
          <Link href="/menu"
            className="font-stamp text-xs uppercase tracking-widest border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-navy transition-colors">
            View Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
