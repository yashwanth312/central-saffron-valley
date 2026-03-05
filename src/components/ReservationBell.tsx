// src/components/ReservationBell.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function ReservationBell() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ repeat: Infinity, repeatDelay: 8, duration: 0.4 }}
    >
      <Link href="/reservations"
        className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-gold text-navy shadow-lg hover:bg-navy hover:text-gold transition-colors border-2 border-gold"
        aria-label="Reserve a table"
      >
        <span className="text-xl">🔔</span>
        <span className="font-stamp text-[8px] uppercase tracking-tight leading-none mt-0.5">Reserve</span>
      </Link>
    </motion.div>
  )
}
