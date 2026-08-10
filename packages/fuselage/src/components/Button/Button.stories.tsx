import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import { action } from 'storybook/actions';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { Box } from '../Box';
import { ButtonGroup } from '../ButtonGroup';
import { Margins } from '../Margins';

import Button from './Button';

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Triggers events and actions. Use for actions that change data or how it is displayed, change a state, trigger an action, or navigate the user within the app or to a different site. Buttons can also link to external URLs.\n\n' +
          '**Rules**\n' +
          '- When more than one button is side by side, always wrap them in a Button group with an 8px gap; a lone button needs no group.\n' +
          '- In a button group, use Primary when the next step is evident, and Secondary when it is unclear; exactly one Primary per group, the rest Secondary.\n' +
          '- For destructive flows, initiate with a Secondary danger button, then confirm with a Primary danger button.\n' +
          '- Never rely on color alone to signal danger — keep a clear label (and icon if used).\n' +
          '- Set a leading icon only when the label needs visual support; skip it when redundant.\n' +
          '- Do not pair a regular Button with an Icon button — use Icon Only on a regular Button instead if a label-less button is needed beside text buttons.\n' +
          '- Loading: replace the icon with a spinner, disable the button, and keep the label copy unchanged.\n' +
          '- Labels: sentence case, no title case, no exclamation marks; avoid vague stand-alone verbs (e.g. "Create channel", not "Create").\n' +
          '- For lightweight in-text navigation, use a link instead of a Button.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label content.',
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'danger',
        'secondary-danger',
        'warning',
        'secondary-warning',
        'success',
        'secondary-success',
      ],
      description: 'Visual style of the button.',
    },
    size: {
      control: 'select',
      // `mini` and `tiny` are valid `size` values but have no rectangular
      // styles, so they silently fall back to the default box. They are left
      // out of Storybook entirely rather than presented as a working choice.
      options: ['small', 'medium', 'large'],
      description: 'Size scale of the button.',
      table: { defaultValue: { summary: 'default (40px)' } },
    },
    square: {
      control: 'boolean',
      description:
        'Renders the button as a square, label-less footprint sized to match neighbouring buttons and inputs.',
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
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant='danger'>Danger</Button>
        <Button variant='secondary-danger'>Secondary Danger</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant='warning'>Warning</Button>
        <Button variant='secondary-warning'>Secondary Warning</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant='success'>Success</Button>
        <Button variant='secondary-success'>Secondary Success</Button>
      </ButtonGroup>
    </Margins>
  ),
};

export const Sizes: Story = {
  render: () => (
    <ButtonGroup>
      <Button size='small'>Small</Button>
      <Button size='medium'>Medium</Button>
      <Button>Default</Button>
      <Button size='large'>Large</Button>
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
            variant: 'primary',
          },
          'secondary': {
            children: 'Button',
            variant: 'secondary',
          },
          'danger': {
            children: 'Button',
            variant: 'danger',
          },
          'secondary-danger': {
            children: 'Button',
            variant: 'secondary-danger',
          },
          'warning': {
            children: 'Button',
            variant: 'warning',
          },
          'secondary-warning': {
            children: 'Button',
            variant: 'secondary-warning',
          },
          'success': {
            children: 'Button',
            variant: 'success',
          },
          'secondary-success': {
            children: 'Button',
            variant: 'secondary-success',
          },
        }}
      />
      <PropsVariationSection
        component={Button}
        common={{
          size: 'small',
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
            variant: 'primary',
          },
          'secondary': {
            children: 'Button',
            variant: 'secondary',
          },
          'danger': {
            children: 'Button',
            variant: 'danger',
          },
          'secondary-danger': {
            children: 'Button',
            variant: 'secondary-danger',
          },
          'warning': {
            children: 'Button',
            variant: 'warning',
          },
          'secondary-warning': {
            children: 'Button',
            variant: 'secondary-warning',
          },
          'success': {
            children: 'Button',
            variant: 'success',
          },
          'secondary-success': {
            children: 'Button',
            variant: 'secondary-success',
          },
        }}
      />
    </>
  ),
};

/**
 * The rectangular sizes, in the order they should be compared. `mini` and
 * `tiny` are intentionally absent: they type-check as `size` values but only
 * have squared styles, so they are not offered as rectangular buttons.
 */
const SIZE_ROWS = [
  { label: 'small', size: 'small' as const },
  { label: 'medium', size: 'medium' as const },
  { label: 'default', size: undefined },
  { label: 'large', size: 'large' as const },
];

/**
 * Outlines the icon canvas and tints the gap that follows it, so both scale
 * visibly with button size instead of having to be inferred from code.
 */
const canvasProbeStyles = `
  .rcx-icon-canvas-probe .rcx-button .rcx-icon {
    outline: 1px dashed rgba(236, 13, 42, 0.9);
    outline-offset: 0;
    background: rgba(236, 13, 42, 0.18);
  }
  /* The label is a text node, so the gap is tinted by offsetting a shadow of
     the icon box across the 4px margin that follows it. Scoped to
     --with-icon, which is only set when a label actually follows the icon. */
  .rcx-icon-canvas-probe .rcx-button--with-icon .rcx-icon {
    box-shadow: 4px 0 0 0 rgba(255, 255, 255, 0.55);
  }
`;

export const IconAndLabel: Story = {
  name: 'Icon and label',
  parameters: {
    docs: {
      description: {
        story:
          'How a leading icon pairs with a label at every size.\n\n' +
          '**The rule.** The icon canvas is sized to the label’s line-height, so it ' +
          'scales with the button: 20px on the 40px and 48px buttons, 16px on the ' +
          '32px and 28px ones. The gap between icon and label is a constant 4px and ' +
          'does **not** scale. The inset on the icon side is one 4px step tighter ' +
          'than the inset on the label side, so the icon reads as optically centred.\n\n' +
          '**Reading the overlay.** The dashed red box is the icon canvas — note it ' +
          'is the canvas, not the glyph, which sits inside it. The pale band to its ' +
          'right is the 4px gap.',
      },
    },
  },
  render: () => (
    <div className='rcx-icon-canvas-probe'>
      <style>{canvasProbeStyles}</style>
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {['Size', 'Icon + label', 'Label only', 'Icon only'].map((h) => (
              <th
                key={h}
                style={{
                  padding: '8px 16px',
                  textAlign: 'left',
                  font: '700 12px/16px Inter, sans-serif',
                  color: '#6C727A',
                  borderBottom: '1px solid #E4E7EA',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SIZE_ROWS.map(({ label, size }) => (
            <tr key={label}>
              <td
                style={{
                  padding: '12px 16px',
                  font: '700 12px/16px Inter, sans-serif',
                  color: '#6C727A',
                  borderBottom: '1px solid #E4E7EA',
                }}
              >
                {label}
              </td>
              <td
                style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid #E4E7EA',
                }}
              >
                <Button variant='primary' size={size} icon='baloon-text'>
                  Button
                </Button>
              </td>
              <td
                style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid #E4E7EA',
                }}
              >
                <Button variant='primary' size={size}>
                  Button
                </Button>
              </td>
              <td
                style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid #E4E7EA',
                }}
              >
                <Button
                  variant='primary'
                  size={size}
                  square
                  icon='baloon-text'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};
