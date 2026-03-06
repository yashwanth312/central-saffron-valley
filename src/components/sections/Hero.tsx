'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { DepartureBoard } from '@/components/DepartureBoard/DepartureBoard'
import { OrnamentalDivider } from '@/components/ui/OrnamentalDivider'
import { menu } from '@/data/menu'

const boardItems = menu
  .filter(d => d.featured)
  .map(d => ({ label: d.name.toUpperCase(), sublabel: `${d.platform} · ${d.service} · ${d.price}` }))

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src="/images/train.jpg"
          alt="The massive Indian railway train inside Central by Saffron Valley"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/40 to-black/60"
        aria-hidden="true"
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Gold top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 space-y-8 max-w-4xl">
        {/* Platform stamp */}
        <motion.p
          className="font-stamp text-gold text-sm uppercase tracking-[0.4em]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          Platform 1 &middot; Salt Lake City
        </motion.p>

        {/* Main heading */}
        <motion.h1
          className="font-display text-cream text-7xl md:text-9xl font-light leading-none tracking-wide"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          Central
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-stamp text-gold text-sm uppercase tracking-[0.6em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}
        >
          by Saffron Valley
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="font-display text-cream text-2xl md:text-3xl font-light italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
        >
          &ldquo;Where Every Meal is a Journey&rdquo;
        </motion.p>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <OrnamentalDivider className="text-gold" />
        </motion.div>

        {/* Departure board */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8, ease: 'easeOut' }}
        >
          <p className="font-stamp text-gold text-xs uppercase tracking-widest mb-3">
            Today&apos;s Departures
          </p>
          <DepartureBoard items={boardItems} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.2, ease: 'easeOut' }}
        >
          <Link
            href="/reservations"
            className="font-stamp text-xs uppercase tracking-widest bg-gold text-navy px-8 py-4 hover:bg-cream transition-colors"
          >
            Reserve a Table
          </Link>
          <Link
            href="/menu"
            className="font-stamp text-xs uppercase tracking-widest border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-navy transition-colors"
          >
            View Menu
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3.0 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-stamp text-gold/60 text-[10px] uppercase tracking-widest">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-gold/60"
            aria-hidden="true"
          >
            <path
              d="M4 7L10 13L16 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
