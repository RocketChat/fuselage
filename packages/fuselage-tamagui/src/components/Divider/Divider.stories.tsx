import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'
import { XStack, Button } from 'tamagui'

const meta: Meta<typeof Divider> = {
  title: 'Data Display/Divider',
  component: Divider,
}
export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: () => <Divider />
}

export const WithText: Story = {
  render: () => <Divider>Divider</Divider>
}

export const Danger: Story = {
  render: () => <Divider variation="danger">Danger Divider</Divider>
}

export const Vertical: Story = {
  render: () => (
    <XStack ai="center" gap="$2">
      <Button>Left</Button>
      <Divider vertical />
      <Button>Right</Button>
    </XStack>
  )
}

export const AsButtonSeparator: Story = {
  render: () => (
    <XStack ai="center" gap="$2">
      <Button icon="phone" />
      <Divider vertical />
      <Button icon="user" />
    </XStack>
  )
}