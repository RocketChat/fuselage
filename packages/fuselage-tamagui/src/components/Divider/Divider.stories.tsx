import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'
import { XStack, Button } from 'tamagui'
import { Icon } from '../Icon/Icon'

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: () => <Divider />
}

export const WithText: Story = {
  render: () => <Divider>Divider</Divider>
}

export const Vertical: Story = {
  render: () => (
    <Divider vertical />
  )
}

export const AsButtonSeparator: Story = {
  render: () => (
    <XStack alignItems="center" gap="$2">
      <Button secondary icon={<Icon name="phone" />} />
      <Divider vertical />
      <Button secondary icon={<Icon name="user" />} />
    </XStack>
  )
}