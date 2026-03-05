'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { diningSpaces } from '@/data/dining-spaces'

export function DiningSpaces() {
  return (
    <section className="py-24 bg-navy bg-hatch">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          subtitle="All Aboard"
          title="The Train Cars"
          className="mb-16 [&_h2]:text-cream [&_p]:text-gold"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {diningSpaces.map(space => (
            <motion.div
              key={space.id}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden border-2 border-gold rounded-t-[50%_20px] bg-charcoal"
            >
              {/* Compartment window frame */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-navy opacity-60 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                <div className="w-full h-full bg-navy flex items-center justify-center">
                  <span className="text-gold font-stamp text-4xl opacity-30">◈</span>
                </div>
              </div>

              <div className="p-6 border-t border-gold">
                <p className="font-stamp text-gold text-xs uppercase tracking-widest mb-1">{space.subtitle}</p>
                <h3 className="font-display text-cream text-2xl font-light mb-2">{space.name}</h3>
                <p className="font-body text-cream/70 text-sm mb-1">{space.description}</p>
                <p className="font-stamp text-gold text-xs mb-4">{space.capacity}</p>
                <Link href={space.href}
                  className="font-stamp text-xs uppercase tracking-widest text-gold border border-gold px-4 py-2 hover:bg-gold hover:text-navy transition-colors">
                  {space.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
