import { render } from '@testing-library/react'
import { Box } from './Box'

describe('Box', () => {
  it('renders without crashing', () => {
    render(<Box />)
  })

  it('applies elevation styles', () => {
    const { container } = render(<Box elevation="1" />)
    expect(container.firstChild).toHaveStyle({
      boxShadow: expect.any(String)
    })
  })

  it('renders as different elements', () => {
    const { container } = render(<Box is="span" />)
    expect(container.firstChild?.nodeName).toBe('SPAN')
  })

  it('handles invisible prop', () => {
    const { container } = render(<Box invisible />)
    expect(container.firstChild).toHaveStyle({
      visibility: 'hidden'
    })
  })
})