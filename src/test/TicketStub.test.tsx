import { render, screen } from '@testing-library/react'
import { TicketStub } from '@/components/TicketStub/TicketStub'

const dish = {
  name: 'Chicken Tikka Masala',
  description: 'Bold, spiced, unforgettable',
  price: '$15.95',
  platform: 'Platform 3',
  service: 'Lunch & Dinner',
}

test('renders dish name and price', () => {
  render(<TicketStub dish={dish} />)
  expect(screen.getByText('Chicken Tikka Masala')).toBeInTheDocument()
  expect(screen.getByText('$15.95')).toBeInTheDocument()
})

test('renders platform info', () => {
  render(<TicketStub dish={dish} />)
  expect(screen.getByText(/Platform 3/)).toBeInTheDocument()
})
