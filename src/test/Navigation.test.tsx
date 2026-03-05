import { render, screen, fireEvent } from '@testing-library/react'
import { Navigation } from '@/components/Navigation/Navigation'

test('renders all main nav links', () => {
  render(<Navigation />)
  expect(screen.getByText('Menu')).toBeInTheDocument()
  expect(screen.getByText('Our Story')).toBeInTheDocument()
  expect(screen.getByText('Private Dining')).toBeInTheDocument()
  expect(screen.getByText('Reserve')).toBeInTheDocument()
})

test('mobile menu opens on burger click', () => {
  render(<Navigation />)
  const burger = screen.getByLabelText('Open menu')
  fireEvent.click(burger)
  expect(screen.getByRole('dialog')).toBeInTheDocument()
})
