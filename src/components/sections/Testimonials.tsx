'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-24 bg-cream bg-paper-grain">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subtitle="Passenger Notes" title="From the Compartment" className="mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative bg-white border border-gold/40 p-6 rotate-[-0.5deg] shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="absolute top-3 right-4 font-stamp text-gold/40 text-xs">Seat {t.compartment}</div>
              <blockquote className="font-display text-lg font-light text-ink leading-relaxed italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="font-stamp text-xs text-gold uppercase tracking-widest">
                — {t.author} · {t.source}
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
