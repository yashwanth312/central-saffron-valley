'use client'

import { motion } from 'framer-motion'
import { DepartureBoard } from '@/components/DepartureBoard/DepartureBoard'
import { SectionHeading } from '@/components/ui/SectionHeading'

const hours = [
  { label: 'MONDAY', sublabel: 'Station Closed' },
  { label: 'TUESDAY – FRIDAY', sublabel: 'Lunch 11AM–2:30PM · Dinner 5–10PM' },
  { label: 'SATURDAY', sublabel: 'Lunch 11AM–3:30PM · Dinner 5–10PM' },
  { label: 'SUNDAY', sublabel: 'Lunch 11AM–3:30PM · Dinner 5–9PM' },
]

export function StationBoard() {
  return (
    <section className="py-24 bg-navy bg-hatch">
      <motion.div
        className="max-w-2xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          subtitle="Schedule"
          title="The Station Board"
          className="mb-12 [&_h2]:text-cream [&_p]:text-gold"
        />
        <DepartureBoard items={hours} />
        <p className="font-stamp text-gold text-sm mt-8 tracking-widest">
          454 E 300 S · Salt Lake City, UT 84111 · (385) 267-1949
        </p>
      </motion.div>
    </section>
  )
}
