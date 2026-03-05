import { render, screen } from '@testing-library/react'
import { Testimonials } from '@/components/sections/Testimonials'

test('renders testimonial quotes', () => {
  render(<Testimonials />)
  expect(screen.getAllByRole('blockquote').length).toBeGreaterThan(0)
})
