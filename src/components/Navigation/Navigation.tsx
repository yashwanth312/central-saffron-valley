'use client'
import Link from 'next/link'
import { useState } from 'react'
import { MobileDrawer } from './MobileDrawer'

const links = [
  { label: 'Menu', href: '/menu' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Private Dining', href: '/private-dining' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Railway Dispatch', href: '/railway-dispatch' },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy border-b-2 border-gold px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-cream text-2xl font-light tracking-widest">
          CENTRAL
          <span className="block text-gold text-xs font-stamp tracking-[0.4em] uppercase">
            by Saffron Valley
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-stamp text-cream text-xs uppercase tracking-widest hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/reservations"
            className="font-stamp text-xs uppercase tracking-widest bg-gold text-navy px-5 py-2 hover:bg-cream transition-colors"
          >
            Reserve
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          aria-label="Open menu"
          className="md:hidden text-cream"
          onClick={() => setOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </nav>

      <MobileDrawer open={open} onClose={() => setOpen(false)} links={links} />
    </>
  )
}
