import { SectionHeading } from '@/components/ui/SectionHeading'
import { TicketStub } from '@/components/TicketStub/TicketStub'
import { menu } from '@/data/menu'
import Link from 'next/link'

const featured = menu.filter(d => d.featured)

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-cream bg-paper-grain">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          subtitle="On the Menu"
          title="Today's Departures"
          className="mb-16"
        />

        <div className="space-y-4">
          {featured.map(dish => (
            <TicketStub
              key={dish.id}
              dish={{
                name: dish.name,
                description: dish.description,
                price: dish.price,
                platform: dish.platform,
                service: dish.service,
              }}
            />
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
