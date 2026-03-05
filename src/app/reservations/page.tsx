export const metadata = { title: 'Reserve a Table — Central by Saffron Valley' }

export default function ReservationsPage() {
  return (
    <main className="min-h-screen bg-navy py-24 px-6">
      <div className="max-w-lg mx-auto">
        {/* Ticket booking window — embed Toast or OpenTable widget here */}
        <div className="border-2 border-gold p-8 text-center">
          <p className="font-stamp text-gold text-xs uppercase tracking-widest mb-4">Ticket Booking Window</p>
          <p className="font-display text-cream text-3xl font-light mb-8">Reserve Your Seat</p>
          {/* Toast reservation widget iframe goes here */}
          <p className="font-stamp text-cream/40 text-xs">Reservation widget integration point</p>
        </div>
      </div>
    </main>
  )
}
