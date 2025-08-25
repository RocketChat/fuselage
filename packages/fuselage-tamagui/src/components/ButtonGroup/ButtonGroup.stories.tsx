import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button/Button'
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
      <Button>Button</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
    </ButtonGroup>
  ),
}

export const Large: Story = {
  render: () => (
    <ButtonGroup large>
      <Button size="large">Button</Button>
      <Button size="large">Button2</Button>
      <Button size="large">Button3</Button>
    </ButtonGroup>
  ),
}

export const Small: Story = {
  render: () => (
    <ButtonGroup small>
      <Button size="small">Button</Button>
      <Button size="small">Button2</Button>
      <Button size="small">Button3</Button>
    </ButtonGroup>
  ),
}

export const Wrap: Story = {
  render: () => (
    <ButtonGroup wrap>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
      <Button>Button 5</Button>
      <Button>Button 6</Button>
      <Button>Button 7</Button>
      <Button>Button 8</Button>
      <Button>Button 9</Button>
      <Button>Button 10</Button>
      <Button>Button 11</Button>
      <Button>Button 12</Button>
      <Button>Button 13</Button>
      <Button>Button 14</Button>
      <Button>Button 15</Button>
      <Button>Button 16</Button>
      <Button>Button 17</Button>
      <Button>Button 18</Button>
      <Button>Button 19</Button>
      <Button>Button 20</Button>
    </ButtonGroup>
  ),
}

export const Stretch: Story = {
  render: () => (
    <ButtonGroup stretch>
      <Button>Button</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
    </ButtonGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ButtonGroup vertical>
      <Button>Button</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
    </ButtonGroup>
  ),
}

export const VerticalLarge: Story = {
  render: () => (
    <ButtonGroup vertical large>
      <Button size="large">Button</Button>
      <Button size="large">Button2</Button>
      <Button size="large">Button3</Button>
    </ButtonGroup>
  ),
}

export const VerticalSmall: Story = {
  render: () => (
    <ButtonGroup vertical small>
      <Button size="small">Button</Button>
      <Button size="small">Button2</Button>
      <Button size="small">Button3</Button>
    </ButtonGroup>
  ),
}

export const VerticalStretch: Story = {
  render: () => (
    <ButtonGroup vertical stretch>
      <Button style={{ width: 200 }}>Button</Button>
      <Button style={{ width: 200 }}>Button2</Button>
      <Button style={{ width: 200 }}>Button3</Button>
    </ButtonGroup>
  ),
}

export const AlignedAtCenter: Story = {
  render: () => (
    <ButtonGroup align="center">
      <Button>Button</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
    </ButtonGroup>
  ),
}

export const AlignedAtStart: Story = {
  render: () => (
    <ButtonGroup align="start">
      <Button>Button</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
    </ButtonGroup>
  ),
}

export const AlignedAtEnd: Story = {
  render: () => (
    <ButtonGroup align="end">
      <Button>Button</Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
    </ButtonGroup>
  ),
}