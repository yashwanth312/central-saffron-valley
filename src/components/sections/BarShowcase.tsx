'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function BarShowcase() {
  return (
    <section className="py-24 bg-cream bg-paper-grain">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative">
          {/* Bar image — hero, 60% width */}
          <motion.div
            className="relative w-full md:w-[65%] aspect-[4/3] overflow-hidden"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/images/bar.jpg"
              alt="The Platform Lounge — art deco bar at Central by Saffron Valley"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 65vw"
            />

            {/* Gradient overlay for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />

            {/* Text overlay */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block font-stamp text-gold text-xs uppercase tracking-widest mb-3">
                The Platform Lounge
              </span>
              <h2 className="font-display text-cream text-3xl md:text-4xl font-light mb-3">
                Indian-Inspired Cocktails
              </h2>
              <p className="font-body text-cream/80 leading-relaxed max-w-md mb-6">
                From saffron-infused classics to chai-spiced innovations — our bar
                blends tradition with creativity.
              </p>
              <Link
                href="/menu"
                className="inline-block font-stamp text-xs uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-navy transition-colors"
              >
                View Drink Menu &rarr;
              </Link>
            </motion.div>
          </motion.div>

          {/* Drinks image — overlapping, positioned offset */}
          <motion.div
            className="hidden md:block absolute right-0 top-1/4 w-[42%] aspect-[3/4] overflow-hidden border-2 border-gold shadow-xl z-10"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            <Image
              src="/images/drinks.jpg"
              alt="Indian-flavored cocktails at Central by Saffron Valley"
              fill
              className="object-cover"
              sizes="42vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
