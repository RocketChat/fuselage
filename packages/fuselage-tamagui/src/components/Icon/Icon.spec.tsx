import { render } from '@testing-library/react'
import { Icon } from './Icon'

describe('Icon', () => {
  it('renders without crashing', () => {
    render(<Icon name="chat" />)
  })
})