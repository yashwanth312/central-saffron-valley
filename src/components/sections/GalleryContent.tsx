'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  // The Space
  { src: '/images/train.jpg', alt: 'The Train - Indian Railways Engine 11189', category: 'space' },
  { src: '/images/dining-space.jpg', alt: 'Main Dining Hall with Ring Lights', category: 'space' },
  { src: '/images/bar.jpg', alt: 'The Platform Lounge Bar', category: 'space' },
  { src: '/images/outside.jpg', alt: 'Central by Saffron Valley Exterior', category: 'space' },
  { src: '/images/lost-property.jpg', alt: 'Lost Property Cabinet', category: 'space' },
  { src: '/images/station-sign.jpg', alt: 'Station Arrival Board', category: 'space' },
  { src: '/images/private-events.jpg', alt: 'Private Dining Setup', category: 'space' },

  // Food
  { src: '/images/food-spread.jpg', alt: "Chef's Spread", category: 'food' },
  { src: '/images/biryani.jpg', alt: 'Signature Biryani', category: 'food' },
  { src: '/images/chicken-tikka.jpg', alt: 'Chicken Tikka', category: 'food' },
  { src: '/images/garlic-naan.jpg', alt: 'Garlic Naan', category: 'food' },
  { src: '/images/tandoori-lamb-chops.jpg', alt: 'Tandoori Lamb Chops', category: 'food' },
  { src: '/images/dahi-puri.jpg', alt: 'Dahi Puri', category: 'food' },
  { src: '/images/gulab-jamun-cheesecake.jpg', alt: 'Gulab Jamun Cheesecake', category: 'food' },
  { src: '/images/mango-panna-cotta.jpg', alt: 'Mango Panna Cotta', category: 'food' },

  // Drinks & Bar
  { src: '/images/drinks.jpg', alt: 'Indian-Inspired Cocktails', category: 'drinks' },
  { src: '/images/chai.jpg', alt: 'Masala Chai', category: 'drinks' },

  // People & Moments
  { src: '/images/founder.jpg', alt: 'Founder Lavanya Mahate', category: 'moments' },
  { src: '/images/people-train.jpg', alt: 'Guests with the Train', category: 'moments' },
  { src: '/images/people-dining.jpg', alt: 'Guests Enjoying Dinner', category: 'moments' },
  { src: '/images/five-star-chain.jpg', alt: '5-Star Chain Horn', category: 'moments' },
]

const categories = [
  { key: 'all', label: 'All' },
  { key: 'space', label: 'The Space' },
  { key: 'food', label: 'Food' },
  { key: 'drinks', label: 'Drinks' },
  { key: 'moments', label: 'Moments' },
] as const

type Category = (typeof categories)[number]['key']

export function GalleryContent() {
  const [active, setActive] = useState<Category>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === active)

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)

  const goNext = useCallback(() => {
    if (lightbox === null) return
    setLightbox((lightbox + 1) % filtered.length)
  }, [lightbox, filtered.length])

  const goPrev = useCallback(() => {
    if (lightbox === null) return
    setLightbox((lightbox - 1 + filtered.length) % filtered.length)
  }, [lightbox, filtered.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, goNext, goPrev])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <main className="min-h-screen bg-cream bg-paper-grain">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/station-sign.jpg"
          alt="Station sign background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-stamp text-gold text-sm uppercase tracking-[0.25em] mb-3"
          >
            Scenes from the Station
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-5xl md:text-7xl text-cream"
          >
            Gallery
          </motion.h1>
        </div>
      </section>

      {/* Filter Tabs + Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`font-stamp text-xs uppercase tracking-widest px-5 py-2 border transition-colors ${
                  active === cat.key
                    ? 'bg-navy text-cream border-navy'
                    : 'border-navy text-navy hover:bg-navy hover:text-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, index) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="break-inside-avoid mb-4"
                >
                  <button
                    onClick={() => openLightbox(index)}
                    className="group relative block w-full overflow-hidden rounded-sm border-2 border-transparent hover:border-gold transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                    aria-label={`View ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-body text-cream text-sm">{img.alt}</p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-cream/80 hover:text-cream transition-colors p-2"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Previous Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-cream/70 hover:text-cream transition-colors p-2"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-cream/70 hover:text-cream transition-colors p-2"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Image + Caption */}
            <motion.div
              key={filtered[lightbox].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center max-w-4xl max-h-[85vh] px-12"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={800}
                className="max-h-[75vh] w-auto h-auto object-contain rounded-sm"
                sizes="(max-width: 1024px) 90vw, 60vw"
                priority
              />
              <p className="mt-4 font-body text-cream/90 text-center text-lg">
                {filtered[lightbox].alt}
              </p>
              <p className="mt-1 font-stamp text-gold/60 text-xs uppercase tracking-widest">
                {lightbox + 1} / {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
