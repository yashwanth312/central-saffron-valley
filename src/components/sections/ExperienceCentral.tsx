'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

const highlights = [
  {
    title: 'The Train',
    label: 'Full-Scale Replica',
    image: '/images/train.jpg',
    description:
      'A massive Indian Railways train prop — engine #11189, WDM-3D — stretches across the entire restaurant. Blue carriages with yellow stripes and Hindi lettering transport you straight to the platforms of India.',
  },
  {
    title: '5-Star Chain Horn',
    label: 'Interactive Experience',
    image: '/images/five-star-chain.jpg',
    description:
      'A red emergency chain mounted on the wall reads "All aboard! Pull the chain for a 5-star review." Give it a tug and a thunderous train horn fills the restaurant — the most unforgettable review you\'ll ever leave.',
  },
  {
    title: 'Robot Servers Maya & Rishi',
    label: 'Future Meets Tradition',
    image: '/images/robo.jfif',
    description:
      'Our futuristic robot servers deliver dishes, clear tables, and even dance for birthday celebrations. Maya and Rishi blend seamlessly into the railway theme, delighting guests of every age.',
  },
  {
    title: 'The Bar',
    label: 'Art Deco Cocktails',
    image: '/images/bar.jpg',
    description:
      'A stunning art deco bar with teal wallpaper, wave-textured walls, and floating glass shelves with glowing backlighting. Sip Indian-flavored cocktails crafted with house-made spice syrups and fresh botanicals.',
  },
  {
    title: 'Arrival Board',
    label: 'Platform Entrance',
    image: '/images/station-sign.jpg',
    description:
      'A bright yellow Indian railway station sign greets you at the entrance — "CENTRAL BY SAFFRON VALLEY" — just like the platform signs at real Indian stations. Your journey begins here.',
  },
  {
    title: 'Lost Property Cabinet',
    label: 'Immersive Detail',
    image: '/images/lost-property.jpg',
    description:
      'A vintage railway "Lost Property" display cabinet filled with old suitcases, weathered trunks, and travel memorabilia behind wire mesh — every corner of Central tells a story.',
  },
]

export function ExperienceCentral() {
  return (
    <section className="py-24 bg-cream bg-paper-grain">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          subtitle="More Than a Meal — An Adventure"
          title="Experience Central"
          className="mb-20"
        />

        <div className="space-y-24 md:space-y-32">
          {highlights.map((highlight, index) => {
            const isEven = index % 2 === 1
            const number = String(index + 1).padStart(2, '0')

            return (
              <motion.div
                key={highlight.title}
                className={`flex flex-col items-center gap-8 md:gap-16 ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Image side */}
                <div className="relative w-full md:w-1/2">
                  <motion.div
                    className="relative aspect-[4/3] overflow-hidden border-2 border-gold/30 shadow-lg"
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gold corner accents */}
                    <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold" />
                    <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold" />
                    <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold" />
                    <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold" />
                  </motion.div>

                  {/* Number badge */}
                  <motion.div
                    className="absolute -top-4 -left-4 w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center font-stamp text-lg font-bold z-10 shadow-md"
                    initial={{ rotate: -12, scale: 0.8 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {number}
                  </motion.div>
                </div>

                {/* Text side */}
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="font-stamp text-gold text-xs uppercase tracking-widest">
                    {highlight.label}
                  </span>
                  <h3 className="font-display text-4xl font-light text-navy">
                    {highlight.title}
                  </h3>
                  <p className="font-body text-charcoal leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
