import { render, screen } from '@testing-library/react'
import { DepartureBoard } from '@/components/DepartureBoard/DepartureBoard'

const items = [
  { label: 'CHICKEN TIKKA MASALA', sublabel: 'Platform 3 · Lunch & Dinner' },
  { label: 'MASALA DOSA', sublabel: 'Platform 1 · All Day' },
]

test('renders departure board with first item visible', () => {
  render(<DepartureBoard items={items} />)
  expect(screen.getByText('CHICKEN TIKKA MASALA')).toBeInTheDocument()
})

test('renders all rows', () => {
  render(<DepartureBoard items={items} />)
  const rows = screen.getAllByRole('row')
  expect(rows).toHaveLength(2)
})
