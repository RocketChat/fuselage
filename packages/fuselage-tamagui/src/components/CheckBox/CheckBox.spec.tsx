import { render, fireEvent } from '@testing-library/react'
import { CheckBox } from './CheckBox'

describe('CheckBox', () => {
  it('renders without crashing', () => {
    render(<CheckBox aria-label="Test checkbox" />)
  })

  it('handles checked state correctly', () => {
    const { getByRole } = render(<CheckBox aria-label="Test checkbox" />)
    const checkbox = getByRole('checkbox') as HTMLInputElement
    
    expect(checkbox.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
  })

  it('handles indeterminate state correctly', () => {
    const { getByRole } = render(<CheckBox indeterminate aria-label="Test checkbox" />)
    const checkbox = getByRole('checkbox') as HTMLInputElement
    
    expect(checkbox.indeterminate).toBe(true)
  })

  it('handles disabled state correctly', () => {
    const { getByRole } = render(<CheckBox disabled aria-label="Test checkbox" />)
    const checkbox = getByRole('checkbox') as HTMLInputElement
    
    expect(checkbox.disabled).toBe(true)
  })

  it('calls onChange handler', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(
      <CheckBox onChange={handleChange} aria-label="Test checkbox" />
    )
    
    fireEvent.click(getByRole('checkbox'))
    expect(handleChange).toHaveBeenCalled()
  })
})