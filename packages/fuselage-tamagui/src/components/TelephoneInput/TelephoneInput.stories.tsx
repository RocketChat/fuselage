import type { Meta, StoryObj } from '@storybook/react'
import TelephoneInput from './TelephoneInput'
import { Icon } from '../Icon'

const meta = {
  title: 'Inputs/TelephoneInput',
  component: TelephoneInput,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
    small: { control: 'boolean' },
  },
} satisfies Meta<typeof TelephoneInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    'aria-label': 'telephone',
    placeholder: 'Placeholder',
  },
}

export const WithValue: Story = {
  args: {
    'aria-label': 'telephone',
    defaultValue: '+1 (213) 724-2528',
  },
}

export const WithIcon: Story = {
  args: {
    'aria-label': 'telephone',
    addon: <Icon name="mobile" size={20} />,
    defaultValue: '+1234567890',
  },
}

export const Disabled: Story = {
  args: {
    'aria-label': 'telephone',
    disabled: true,
    value: '+1234567890',
  },
}

export const Errored: Story = {
  args: {
    'aria-label': 'telephone',
    error: 'Error',
    value: '+1234567890',
  },
}

export const Small: Story = {
  args: {
    'aria-label': 'telephone',
    small: true,
    placeholder: 'Placeholder',
  },
}
