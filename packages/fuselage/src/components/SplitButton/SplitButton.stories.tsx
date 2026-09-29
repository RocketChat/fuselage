import type { Decorator, Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

import { Box } from '../Box';
import { IconButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Menu, MenuItem } from '../Menu';

import SplitButton from './SplitButton';

export default {
  title: 'Inputs/SplitButton',
  component: SplitButton,
  parameters: {
    docs: {
      description: {
        component:
          'Fuses a menu trigger and its primary action into a single control, with no gap and group-level rounded corners.\n\n' +
          'The first child is a **ghost** segment: it stays transparent so the translucent group background (the secondary button background at 60% opacity) shows through. Put the `Menu` trigger there and the primary action after it.\n\n' +
          '**Rules**\n' +
          '- Exactly two children: a `Menu` trigger, then the primary action.\n' +
          '- Name the group with `aria-label` (or `aria-labelledby`) — it is announced when focus enters it.\n' +
          '- For toggles (microphone, camera), set `aria-pressed` on the action.\n' +
          '- Keep both segments the same size.',
      },
    },
  },
} satisfies Meta<typeof SplitButton>;

type Story = StoryObj<typeof SplitButton>;

// Surface behind the stories so ghost translucency reads in both themes.
const withLightSurface: Decorator = (Story) => (
  <Box backgroundColor='light' padding='x16'>
    <Story />
  </Box>
);

const devices = [
  { id: 'built-in', label: 'Built-in Microphone' },
  { id: 'headset', label: 'Headset' },
];

export const Default: Story = {
  decorators: [withLightSurface],
  render: function Render() {
    const [enabled, setEnabled] = useState(true);
    const [device, setDevice] = useState('built-in');

    return (
      <SplitButton aria-label='Microphone'>
        <Menu
          icon='kebab'
          button={<IconButton secondary small icon='kebab' />}
          aria-label='Audio settings'
          placement='top-start'
          selectionMode='single'
          selectedKeys={[device]}
          onSelectionChange={(keys) => {
            const [key] = keys as Set<string>;
            if (key) setDevice(key);
          }}
        >
          {devices.map(({ id, label }) => (
            <MenuItem key={id}>{label}</MenuItem>
          ))}
        </Menu>
        <IconButton
          secondary
          small
          icon={enabled ? 'mic' : 'mic-off'}
          aria-label='Microphone'
          aria-pressed={enabled}
          onClick={() => setEnabled((enabled) => !enabled)}
        />
      </SplitButton>
    );
  },
};

export const InsideButtonGroup: Story = {
  decorators: [withLightSurface],
  render: () => (
    <ButtonGroup aria-label='Call controls'>
      <SplitButton aria-label='Microphone'>
        <Menu
          icon='kebab'
          button={<IconButton secondary small icon='kebab' />}
          aria-label='Audio settings'
        >
          <MenuItem key='built-in'>Built-in Microphone</MenuItem>
        </Menu>
        <IconButton
          secondary
          small
          icon='mic'
          aria-label='Microphone'
          aria-pressed
        />
      </SplitButton>
      <SplitButton aria-label='Camera'>
        <Menu
          icon='chevron-up'
          button={<IconButton secondary small icon='chevron-up' />}
          aria-label='Video settings'
        >
          <MenuItem key='built-in'>Built-in Camera</MenuItem>
        </Menu>
        <IconButton
          secondary
          small
          icon='video'
          aria-label='Camera'
          aria-pressed={false}
        />
      </SplitButton>
      <IconButton secondary small icon='desktop' aria-label='Present' />
      <IconButton danger small icon='phone-off' aria-label='Leave call' />
    </ButtonGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Video-call controls: each device toggle is paired with a ghost menu segment that opens the device selection.',
      },
    },
  },
};
