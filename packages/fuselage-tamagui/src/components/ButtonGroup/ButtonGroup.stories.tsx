import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'tamagui'
import { ButtonGroup } from './ButtonGroup'

const meta: Meta<typeof ButtonGroup> = {
  title: 'INPUTS/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button borderRadius='$sm'>First</Button>
      <Button borderRadius='$sm'>Second</Button>
      <Button borderRadius='$sm'>Third</Button>
    </ButtonGroup>
  ),
}

export const Large: Story = {
  render: () => (
    <ButtonGroup>
      <Button borderRadius='$sm' size='$lg'>First</Button>
      <Button borderRadius='$sm' size='$lg'>Second</Button>
      <Button borderRadius='$sm' size='$lg'>Third</Button>
    </ButtonGroup>
  ),
}

export const Small: Story = {
  render: () => (
    <ButtonGroup>
      <Button borderRadius='$sm' size='$sm'>First</Button>
      <Button borderRadius='$sm' size='$sm'>Second</Button>
      <Button borderRadius='$sm' size='$sm'>Third</Button>
    </ButtonGroup>
  ),
}

export const Wrap: Story = {
  render: () => (
    <ButtonGroup wrap>
      <Button borderRadius='$sm'>Button 1</Button>
      <Button borderRadius='$sm'>Button 2</Button>
      <Button borderRadius='$sm'>Button 3</Button>
      <Button borderRadius='$sm'>Button 4</Button>
      <Button borderRadius='$sm'>Button 5</Button>
      <Button borderRadius='$sm'>Button 6</Button>
    </ButtonGroup>
  ),
}

export const Stretch: Story = {
  render: () => (
    <ButtonGroup stretch>
      <Button borderRadius='$sm'>First</Button>
      <Button borderRadius='$sm'>Second</Button>
      <Button borderRadius='$sm'>Third</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup vertical>
      <Button borderRadius='$sm'>First</Button>
      <Button borderRadius='$sm'>Second</Button>
      <Button borderRadius='$sm'>Third</Button>
    </ButtonGroup>
  ),
}

export const VerticalLarge: Story = {
  render: () => (
    <ButtonGroup vertical>
      <Button borderRadius='$sm' size='$lg'>First</Button>
      <Button borderRadius='$sm' size='$lg'>Second</Button>
      <Button borderRadius='$sm' size='$lg'>Third</Button>
    </ButtonGroup>
  ),
}

export const VerticalSmall: Story = {
  render: () => (
    <ButtonGroup vertical>
      <Button borderRadius='$sm' size='$sm'>First</Button>
      <Button borderRadius='$sm' size='$sm'>Second</Button>
      <Button borderRadius='$sm' size='$sm'>Third</Button>
    </ButtonGroup>
  ),
}

export const VerticalStretch: Story = {
  render: () => (
    <ButtonGroup vertical stretch>
      <Button borderRadius='$sm'>First</Button>
      <Button borderRadius='$sm'>Second</Button>
      <Button borderRadius='$sm'>Third</Button>
    </ButtonGroup>
  ),
}

export const AlignedAtCenter: Story = {
  render: () => (
    <ButtonGroup align="center">
      <Button borderRadius='$sm'>First</Button>
      <Button borderRadius='$sm'>Second</Button>
      <Button borderRadius='$sm'>Third</Button>
    </ButtonGroup>
  ),
}

export const AlignedAtStart: Story = {
  render: () => (
    <ButtonGroup align="start">
      <Button borderRadius='$sm'>First</Button>
      <Button borderRadius='$sm'>Second</Button>
      <Button borderRadius='$sm'>Third</Button>
    </ButtonGroup>
  ),
}

export const AlignedAtEnd: Story = {
  render: () => (
    <ButtonGroup align="end">
      <Button borderRadius='$sm'>First</Button>
      <Button borderRadius='$sm'>Second</Button>
      <Button borderRadius='$sm'>Third</Button>
    </ButtonGroup>
  ),
}