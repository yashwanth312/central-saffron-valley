import { render, screen } from '@testing-library/react'
import { FeaturedDishes } from '@/components/sections/FeaturedDishes'

test('renders section heading', () => {
  render(<FeaturedDishes />)
  expect(screen.getByText("Today's Departures")).toBeInTheDocument()
})

test('renders featured dishes as ticket stubs', () => {
  render(<FeaturedDishes />)
  expect(screen.getByText('Chicken Tikka Masala')).toBeInTheDocument()
  expect(screen.getByText('Chicken Biryani')).toBeInTheDocument()
})
