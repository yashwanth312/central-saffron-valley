'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { OrnamentalDivider } from '@/components/ui/OrnamentalDivider'

export function FounderSpotlight() {
  return (
    <section className="py-24 bg-navy bg-hatch">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image side — 40% */}
          <motion.div
            className="relative w-full md:w-[40%] flex-shrink-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/founder.jpg"
                alt="Lavanya Mahate, founder of Central by Saffron Valley"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            {/* Gold double-border frame */}
            <motion.div
              className="absolute inset-0 border-2 border-gold pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.div
              className="absolute inset-2 border border-gold/50 pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </motion.div>

          {/* Text side — 60% */}
          <div className="w-full md:w-[60%]">
            <motion.span
              className="inline-block font-stamp text-gold text-xs uppercase tracking-widest mb-4"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Meet the Founder
            </motion.span>

            <motion.h2
              className="font-display text-cream text-4xl md:text-5xl font-light mb-3"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Lavanya Mahate
            </motion.h2>

            <motion.p
              className="font-display text-gold/80 text-lg italic mb-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A journey from India&rsquo;s railway platforms to Salt Lake City&rsquo;s heart
            </motion.p>

            <motion.p
              className="font-body text-cream/80 leading-relaxed mb-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With 16 years of shaping Utah&rsquo;s food culture, Lavanya created Central as a
              love letter to India&rsquo;s golden age of railway travel — where food, stories,
              and human connection intertwined at every station stop.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <OrnamentalDivider className="mb-8 text-left" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/our-story"
                className="inline-block font-stamp text-xs uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-navy transition-colors"
              >
                Read Her Story &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
