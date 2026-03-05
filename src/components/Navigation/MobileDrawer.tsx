'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  open: boolean
  onClose: () => void
  links: { label: string; href: string }[]
}

export function MobileDrawer({ open, onClose, links }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.25 }}
          className="fixed inset-y-0 right-0 z-50 w-72 bg-navy border-l-2 border-gold p-8 flex flex-col"
        >
          <button onClick={onClose} className="text-cream self-end mb-8 font-stamp text-xs tracking-widest">
            ✕ CLOSE
          </button>

          <div className="space-y-1">
            {links.map((l) => (
              <div key={l.href} className="flex items-center gap-3">
                <span className="text-gold font-stamp text-xs">●</span>
                <Link
                  href={l.href}
                  onClick={onClose}
                  className="font-display text-cream text-2xl font-light hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              </div>
            ))}
          </div>

          <Link
            href="/reservations"
            onClick={onClose}
            className="mt-auto font-stamp text-xs uppercase tracking-widest bg-gold text-navy px-5 py-3 text-center hover:bg-cream transition-colors"
          >
            Reserve a Table
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
