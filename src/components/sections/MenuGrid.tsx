'use client'
import { useState } from 'react'
import { TicketStub } from '@/components/TicketStub/TicketStub'
import { menu, type Dish } from '@/data/menu'
import { SectionHeading } from '@/components/ui/SectionHeading'

const categories = ['all', 'starters', 'mains', 'breads', 'drinks', 'desserts'] as const

export function MenuGrid() {
  const [active, setActive] = useState<string>('all')
  const filtered = active === 'all' ? menu : menu.filter(d => d.category === active)

  return (
    <section className="py-24 bg-cream bg-paper-grain min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading subtitle="Railway Dining Car" title="The Menu" className="mb-12" />

        {/* Category filters as stamp tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`font-stamp text-xs uppercase tracking-widest px-5 py-2 border transition-colors ${
                active === cat ? 'bg-navy text-cream border-navy' : 'border-navy text-navy hover:bg-navy hover:text-cream'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map(dish => (
            <TicketStub key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  )
}
