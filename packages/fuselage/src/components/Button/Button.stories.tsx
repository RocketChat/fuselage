import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { action } from 'storybook/actions';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Box } from '../Box';
import { ButtonGroup } from '../ButtonGroup';
import { Margins } from '../Margins';

import Button from './Button';
import IconButton from './IconButton';

export default {
  title: 'Inputs/Button',
  component: Button,
  subcomponents: { IconButton },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label content.',
    },
    primary: {
      control: 'boolean',
      description:
        'Solid, high-emphasis style. Used for the main action in a group.',
      table: { category: 'Kind' },
    },
    secondary: {
      control: 'boolean',
      description:
        'Outlined, lower-emphasis style. Combines with `danger`/`warning`/`success` for their secondary variants.',
      table: { category: 'Kind' },
    },
    danger: {
      control: 'boolean',
      description: 'Destructive-action color kind.',
      table: { category: 'Kind' },
    },
    warning: {
      control: 'boolean',
      description: 'Warning color kind.',
      table: { category: 'Kind' },
    },
    success: {
      control: 'boolean',
      description: 'Success color kind.',
      table: { category: 'Kind' },
    },
    tiny: {
      control: 'boolean',
      description: 'Tiny size scale.',
      table: { category: 'Size' },
    },
    mini: {
      control: 'boolean',
      description: 'Mini size scale.',
      table: { category: 'Size' },
    },
    small: {
      control: 'boolean',
      description: 'Small size scale.',
      table: { category: 'Size' },
    },
    medium: {
      control: 'boolean',
      description: 'Medium size scale.',
      table: { category: 'Size' },
    },
    large: {
      control: 'boolean',
      description: 'Large size scale.',
      table: { category: 'Size' },
    },
    square: {
      control: 'boolean',
      description:
        'Renders as a square icon-only footprint instead of the default pill shape.',
      table: { category: 'Shape' },
    },
    icon: {
      control: 'text',
      description: 'Name of the Fuselage icon rendered before the label.',
      table: { category: 'Content' },
    },
    loading: {
      control: 'boolean',
      description:
        'Shows a spinner in place of the icon and blocks interaction.',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button and blocks pointer interaction.',
      table: { category: 'State' },
    },
    is: {
      control: 'select',
      options: ['button', 'a'],
      description: 'Underlying element rendered.',
      table: { category: 'Polymorphism', defaultValue: { summary: 'button' } },
    },
    href: {
      control: 'text',
      description: 'Link target when `is="a"`.',
      table: { category: 'Polymorphism' },
    },
    external: {
      control: 'boolean',
      description:
        'When `is="a"`, opens the link in a new tab with `rel="noopener noreferrer"`.',
      table: { category: 'Polymorphism' },
    },
    onClick: {
      control: false,
      description: 'Called when the button is activated.',
      table: { category: 'Events' },
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    onClick: action('click'),
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Button',
    onClick: action('click'),
  },
};

export const LoadingInteraction: Story = {
  args: {
    icon: 'add-user',
  },
  render: (args) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
      <Button
        {...args}
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      >
        Button
      </Button>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the button to see the loading state.',
      },
    },
  },
};

export const Truncated: Story = {
  render: () => (
    <Box maxWidth={160} display='flex' justifyContent='center'>
      <Button onClick={action('click')}>
        Button with loooooooooooong text
      </Button>
    </Box>
  ),
};

export const Variants: Story = {
  render: () => (
    <Margins all='x8'>
      <ButtonGroup>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button danger>Danger</Button>
        <Button secondary danger>
          Secondary Danger
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button warning>Warning</Button>
        <Button secondary warning>
          Secondary Warning
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button success>Success</Button>
        <Button secondary success>
          Secondary Success
        </Button>
      </ButtonGroup>
    </Margins>
  ),
};

export const Sizes: Story = {
  render: () => (
    <ButtonGroup>
      <Button small>Small</Button>
      <Button medium>Medium</Button>
      <Button>Default</Button>
    </ButtonGroup>
  ),
};

export const AsLink: Story = {
  args: {
    is: 'a',
    href: 'https://rocket.chat',
    external: true,
    children: 'Button',
  },
};

export const States: Story = {
  render: () => (
    <>
      <PropsVariationSection
        component={Button}
        common={{ onClick: action('click') }}
        xAxis={{
          default: {},
          hover: { className: 'hover' },
          active: { className: 'active' },
          focus: { className: 'focus focus-visible' },
          disabled: { disabled: true },
        }}
        yAxis={{
          'icon + text': {
            children: 'Button',
            icon: 'baloon-text',
          },
          'text': {
            children: 'Button',
          },
          'primary': {
            children: 'Button',
            primary: true,
          },
          'secondary': {
            children: 'Button',
            secondary: true,
          },
          'danger': {
            children: 'Button',
            danger: true,
          },
          'secondary-danger': {
            children: 'Button',
            secondary: true,
            danger: true,
          },
          'warning': {
            children: 'Button',
            warning: true,
          },
          'secondary-warning': {
            children: 'Button',
            secondary: true,
            warning: true,
          },
          'success': {
            children: 'Button',
            success: true,
          },
          'secondary-success': {
            children: 'Button',
            secondary: true,
            success: true,
          },
        }}
      />
      <PropsVariationSection
        component={Button}
        common={{
          small: true,
          onClick: action('click'),
        }}
        xAxis={{
          default: {},
          hover: { className: 'hover' },
          active: { className: 'active' },
          focus: { className: 'focus focus-visible' },
          disabled: { disabled: true },
        }}
        yAxis={{
          'icon + text': {
            children: 'Button',
            icon: 'baloon-text',
          },
          'text': {
            children: 'Button',
          },
          'primary': {
            children: 'Button',
            primary: true,
          },
          'secondary': {
            children: 'Button',
            secondary: true,
          },
          'danger': {
            children: 'Button',
            danger: true,
          },
          'secondary-danger': {
            children: 'Button',
            secondary: true,
            danger: true,
          },
          'warning': {
            children: 'Button',
            warning: true,
          },
          'secondary-warning': {
            children: 'Button',
            secondary: true,
            warning: true,
          },
          'success': {
            children: 'Button',
            success: true,
          },
          'secondary-success': {
            children: 'Button',
            secondary: true,
            success: true,
          },
        }}
      />
    </>
  ),
};

export const AsIconButton: Story = {
  render: () => <IconButton icon='arrow-back' onClick={action('click')} />,
  parameters: {
    docs: {
      description: {
        story:
          'See full IconButton documentation [here](../?path=/docs/inputs-iconbutton)',
      },
    },
  },
};
