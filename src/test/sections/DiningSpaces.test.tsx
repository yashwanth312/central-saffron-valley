import { render, screen } from '@testing-library/react'
import { DiningSpaces } from '@/components/sections/DiningSpaces'

test('renders all three dining spaces', () => {
  render(<DiningSpaces />)
  expect(screen.getByText('The Mezzanine')).toBeInTheDocument()
  expect(screen.getByText('The Platform Below')).toBeInTheDocument()
  expect(screen.getByText('The Main Floor')).toBeInTheDocument()
})
