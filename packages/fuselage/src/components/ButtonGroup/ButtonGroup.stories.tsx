import type {
  Decorator,
  Meta,
  StoryFn,
  StoryObj,
} from '@storybook/react-webpack5';

import { Box } from '../Box';
import { Button, IconButton } from '../Button';

import ButtonGroup from './ButtonGroup';

export default {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component:
          'A container for grouping buttons that semantically share a common action context. By default the buttons are laid out with an 8px gap (4px with `small`, 16px with `large`).\n\n' +
          '**Joined**\n\n' +
          'The `joined` variant fuses the buttons into a single segmented control: no gap between segments, group-level rounded corners, and no dividers — buttons sit flush. `joined` takes precedence over the `small`/`large` spacing modifiers; it composes with `vertical`, `stretch`, and `align`.\n\n' +
          'The joined group carries a translucent background (the secondary button background at 60% opacity). With opaque buttons it is fully covered; it only shows through **ghost** segments — buttons rendered with the `ghost` prop (`Button` or `IconButton`), which stay transparent so the surface behind the group shines through. Use ghost segments for auxiliary edge actions, e.g. the expand chevron of a split button or floating controls over media/video. Ghost segments keep hover/active/focus feedback and are typically the first or last segment. Outside a joined group the `ghost` prop is ignored (with a dev-only warning).\n\n' +
          '**Rules**\n' +
          '- Use 2–4 buttons in a joined group, with at most one Primary.\n' +
          '- Joined groups work with regular labeled Buttons, icon-only `square` Buttons, and IconButtons.\n' +
          '- Do not pair a regular Button with an IconButton — beside labeled buttons use an icon-only `square` Button; reserve IconButtons for groups made only of IconButtons.',
      },
    },
  },
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment of the buttons along the main axis.',
      table: { category: 'Layout', defaultValue: { summary: 'start' } },
    },
    stretch: {
      control: 'boolean',
      description: 'Stretches every button to share the available space.',
      table: { category: 'Layout' },
    },
    wrap: {
      control: 'boolean',
      description: 'Allows buttons to wrap onto multiple lines.',
      table: { category: 'Layout' },
    },
    vertical: {
      control: 'boolean',
      description: 'Stacks the buttons vertically instead of horizontally.',
      table: { category: 'Layout' },
    },
    small: {
      control: 'boolean',
      description: 'Small size scale for the contained buttons.',
      table: { category: 'Size' },
    },
    large: {
      control: 'boolean',
      description: 'Large size scale for the contained buttons.',
      table: { category: 'Size' },
    },
    joined: {
      control: 'boolean',
      description:
        'Fuses the buttons into a single segmented control with zero gap. Takes precedence over `small`/`large` spacing.',
      table: { category: 'Layout' },
    },
  },
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

// Surface behind the joined stories so ghost translucency reads in both themes.
const withLightSurface: Decorator = (Story) => (
  <Box backgroundColor='light' padding='x16'>
    <Story />
  </Box>
);

const Template: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button>Button 1</Button>
    <Button>Button 2</Button>
    <Button>Button 3</Button>
  </ButtonGroup>
);

const TemplateMultiple: StoryFn<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
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
);

export const Default: Story = {
  render: Template,
};

export const Large: Story = {
  render: Template,
  args: {
    large: true,
  },
};

export const Small: Story = {
  render: Template,
  args: {
    small: true,
  },
};

export const Wrap: Story = {
  render: TemplateMultiple,
  args: {
    wrap: true,
  },
};

export const Stretch: Story = {
  render: Template,
  args: {
    stretch: true,
  },
};

export const Vertical: Story = {
  render: Template,
  args: {
    vertical: true,
  },
};

export const VerticalLarge: Story = {
  render: Template,
  args: {
    vertical: true,
    large: true,
  },
};

export const VerticalSmall: Story = {
  render: Template,
  args: {
    vertical: true,
    small: true,
  },
};

export const VerticalStretch: Story = {
  render: Template,
  args: {
    vertical: true,
    stretch: true,
  },
};

export const AlignedAtStart: Story = {
  render: Template,
  args: {
    align: 'start',
  },
};

export const AlignedAtCenter: Story = {
  render: Template,
  args: {
    align: 'center',
  },
};

export const AlignedAtEnd: Story = {
  render: Template,
  args: {
    align: 'end',
  },
};

export const Joined: Story = {
  decorators: [withLightSurface],
  render: (args) => (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      gap='x16'
    >
      <ButtonGroup {...args}>
        <Button>Cancel</Button>
        <Button primary>Save</Button>
      </ButtonGroup>
      <ButtonGroup {...args}>
        <IconButton icon='mic' ghost aria-label='Microphone' />
        <IconButton
          icon='chevron-down'
          secondary
          aria-label='Microphone options'
        />
      </ButtonGroup>
      <ButtonGroup {...args}>
        <IconButton icon='video' ghost aria-label='Camera' />
        <IconButton icon='chevron-down' secondary aria-label='Camera options' />
      </ButtonGroup>
    </Box>
  ),
  args: {
    joined: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Joined groups fuse buttons into a single segmented control. Typical uses are confirmation pairs and video-call controls, where a device toggle is paired with a ghost chevron segment that opens the device selection.',
      },
    },
  },
};

export const JoinedSegmented: Story = {
  decorators: [withLightSurface],
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Day</Button>
      <Button>Week</Button>
      <Button>Month</Button>
    </ButtonGroup>
  ),
  args: {
    joined: true,
  },
};

export const JoinedSplitButton: Story = {
  decorators: [withLightSurface],
  render: (args) => (
    <ButtonGroup {...args}>
      <Button
        square
        icon='chevron-down'
        ghost
        aria-label='More reply actions'
      />
      <Button>Reply</Button>
    </ButtonGroup>
  ),
  args: {
    joined: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A split button: the main action plus a ghost expand segment. The ghost segment lets the group’s translucent background show through.',
      },
    },
  },
};

export const JoinedVertical: Story = {
  decorators: [withLightSurface],
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </ButtonGroup>
  ),
  args: {
    joined: true,
    vertical: true,
  },
};

export const WithIconButtons: Story = {
  decorators: [withLightSurface],
  render: () => (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      gap='x16'
    >
      <ButtonGroup>
        <IconButton icon='mic' secondary medium aria-label='Microphone' />
        <IconButton icon='video' secondary medium aria-label='Camera' />
        <IconButton icon='kebab' secondary medium aria-label='More options' />
      </ButtonGroup>
      <ButtonGroup joined>
        <IconButton icon='mic' secondary medium aria-label='Microphone' />
        <IconButton icon='video' secondary medium aria-label='Camera' />
        <IconButton icon='kebab' secondary medium aria-label='More options' />
      </ButtonGroup>
    </Box>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Icon buttons work in both layouts: a default group keeps the 8px gap, while a joined group fuses them into a single segmented control.',
      },
    },
  },
};
