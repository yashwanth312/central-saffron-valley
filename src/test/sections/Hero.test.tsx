import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'

test('renders tagline', () => {
  render(<Hero />)
  expect(screen.getByText(/Flavor, Story, Soul/i)).toBeInTheDocument()
})

test('renders reserve and menu CTAs', () => {
  render(<Hero />)
  expect(screen.getByRole('link', { name: /reserve/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /view menu/i })).toBeInTheDocument()
})
