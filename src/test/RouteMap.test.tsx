import { render, screen } from '@testing-library/react'
import { RouteMap } from '@/components/RouteMap/RouteMap'

test('renders all route stops', () => {
  render(<RouteMap />)
  expect(screen.getByText('India')).toBeInTheDocument()
  expect(screen.getByText('Salt Lake City')).toBeInTheDocument()
  expect(screen.getByText('Central')).toBeInTheDocument()
})
