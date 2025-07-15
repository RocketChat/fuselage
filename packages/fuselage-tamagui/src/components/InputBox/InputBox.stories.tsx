import type { Meta, StoryObj } from '@storybook/react'
import { InputBox } from './InputBox'
import { Icon } from '../Icon'
import { Stack } from 'tamagui'

const meta: Meta<typeof InputBox> = {
  title: 'Inputs/InputBox',
  component: InputBox,
}
export default meta

type Story = StoryObj<typeof InputBox>

export const Default: Story = {
  args: {
    defaultValue: 'Value',
    onChange: () => {},
  },
}

export const Date: Story = {
  args: {
    defaultValue: 'Value',
    type: 'date',
    onChange: () => {},
  },
}

export const Time: Story = {
  args: {
    defaultValue: 'Value',
    type: 'time',
    onChange: () => {},
  },
}

export const WithAddon: Story = {
  args: {
    addon: <Icon name="send" size={20} />,
  },
}

export const Invalid: Story = {
  args: {
    defaultValue: 'Value',
    error: 'Error',
    onChange: () => {},
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 'Value',
    disabled: true,
    onChange: () => {},
  },
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder',
    onChange: () => {},
  },
}

export const Skeleton: Story = {
  render: () => <InputBox.Skeleton />,
}

export const SmallVariants: Story = {
  render: () => (
    <Stack space="$2">
      <InputBox type="text" small placeholder="Name" aria-label="Name" />
      <InputBox
        type="text"
        small
        placeholder="Search"
        addon={<Icon name="magnifier" size={20} />}
        aria-label="Search"
      />
    </Stack>
  ),
}