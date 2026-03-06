'use client'

import { SectionHeading } from '@/components/ui/SectionHeading'
import { menu } from '@/data/menu'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const featured = menu.filter(d => d.featured)

const dishImages: Record<string, string> = {
  'tikka-masala': '/images/chicken-tikka.jpg',
  'delhi-chaat': '/images/dahi-puri.jpg',
  'chicken-pakoras': '/images/mini-poppadams.jpg',
  'masala-dosa': '/images/food-spread.jpg',
  'chicken-tikka-dosa': '/images/lunch-specials.jpg',
  'chicken-biryani': '/images/biryani.jpg',
}

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-cream bg-paper-grain">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          subtitle="On the Menu"
          title="Today's Departures"
          className="mb-16"
        />

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
          {featured.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-center min-w-[280px] md:min-w-[320px] aspect-[3/4] relative overflow-hidden rounded-lg group cursor-pointer flex-shrink-0 border-2 border-transparent hover:border-gold transition-colors duration-300"
            >
              <Image
                src={dishImages[dish.id] || '/images/food-spread.jpg'}
                alt={dish.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 280px, 320px"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/10 transition-all duration-500" />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-stamp text-gold text-xs uppercase tracking-widest mb-1">
                  {dish.platform}
                </p>
                <h3 className="font-display text-cream text-2xl font-light mb-1">
                  {dish.name}
                </h3>
                <p className="font-stamp text-gold text-lg">
                  {dish.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/menu"
            className="font-stamp text-xs uppercase tracking-widest border-2 border-navy text-navy px-8 py-3 hover:bg-navy hover:text-cream transition-colors">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
