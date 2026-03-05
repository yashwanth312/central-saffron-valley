'use client'
import { useState } from 'react'
import { routeStops } from '@/data/story'
import { motion, AnimatePresence } from 'framer-motion'

export function RouteMap() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="py-16">
      {/* Track line */}
      <div className="relative">
        <div className="absolute top-5 left-0 right-0 h-0.5 bg-gold/40" />

        <div className="flex justify-between relative">
          {routeStops.map((stop, i) => (
            <div key={stop.id} className="flex flex-col items-center gap-3 cursor-pointer" onClick={() => setActive(active === stop.id ? null : stop.id)}>
              <button
                className={`w-10 h-10 rounded-full border-2 font-stamp text-xs flex items-center justify-center z-10 transition-colors ${
                  active === stop.id ? 'bg-gold border-gold text-navy' : 'bg-cream border-gold text-gold hover:bg-gold hover:text-navy'
                }`}
              >
                {i + 1}
              </button>
              <span className="font-stamp text-xs text-navy uppercase tracking-widest text-center max-w-[80px]">{stop.label}</span>
              <span className="font-stamp text-gold text-xs">{stop.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Story card */}
      <AnimatePresence>
        {active && (() => {
          const stop = routeStops.find(s => s.id === active)!
          return (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-8 border border-gold/40 bg-white p-8 max-w-lg mx-auto"
            >
              <p className="font-stamp text-gold text-xs uppercase tracking-widest mb-2">{stop.year} · {stop.label}</p>
              <p className="font-display text-ink text-xl font-light italic leading-relaxed">{stop.story}</p>
            </motion.div>
          )
        })()}
      </AnimatePresence>
    </div>
  )
}
