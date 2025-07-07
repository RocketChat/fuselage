import { render, fireEvent } from '@testing-library/react'
import { EmailInput } from './EmailInput'

describe('EmailInput', () => {
  it('renders without crashing', () => {
    render(<EmailInput aria-label="Email input" />)
  })

  it('renders with placeholder', () => {
    const { getByPlaceholderText } = render(
      <EmailInput placeholder="Enter email" aria-label="Email input" />
    )
    expect(getByPlaceholderText('Enter email')).toBeInTheDocument()
  })

  it('handles value changes', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(
      <EmailInput onChange={handleChange} aria-label="Email input" />
    )
    
    fireEvent.change(getByRole('textbox'), {
      target: { value: 'test@example.com' },
    })
    expect(handleChange).toHaveBeenCalled()
  })

  it('displays addon when provided', () => {
    const { container } = render(
      <EmailInput addon={<div data-testid="addon" />} aria-label="Email input" />
    )
    expect(container.querySelector('[data-testid="addon"]')).toBeInTheDocument()
  })

  it('applies error styles when error is provided', () => {
    const { getByRole } = render(
      <EmailInput error="Invalid email" aria-label="Email input" />
    )
    expect(getByRole('textbox')).toHaveStyle({
      borderColor: expect.any(String),
    })
  })

  it('applies disabled styles when disabled', () => {
    const { getByRole } = render(
      <EmailInput disabled aria-label="Email input" />
    )
    expect(getByRole('textbox')).toBeDisabled()
  })
})