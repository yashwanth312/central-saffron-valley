import { render, screen } from '@testing-library/react'
import { OrnamentalDivider } from '@/components/ui/OrnamentalDivider'

test('renders ornamental divider with brass color', () => {
  render(<OrnamentalDivider />)
  const divider = screen.getByRole('separator')
  expect(divider).toBeInTheDocument()
  expect(divider).toHaveClass('text-gold')
})
