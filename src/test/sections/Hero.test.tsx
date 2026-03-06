import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'

test('renders tagline', () => {
  render(<Hero />)
  expect(screen.getByText(/where every meal is a journey/i)).toBeInTheDocument()
})

test('renders reserve and menu CTAs', () => {
  render(<Hero />)
  expect(screen.getByRole('link', { name: /reserve/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /view menu/i })).toBeInTheDocument()
})

test('renders main heading', () => {
  render(<Hero />)
  expect(screen.getByRole('heading', { name: /central/i })).toBeInTheDocument()
})

test('renders platform stamp', () => {
  render(<Hero />)
  expect(screen.getByText(/platform 1 · salt lake city/i)).toBeInTheDocument()
})
