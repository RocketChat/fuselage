import { action } from '@storybook/addon-actions';
import {
  Title,
  Subtitle,
  Description,
  Primary as PrimaryStory,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Button, ButtonGroup, Icon, IconButton } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Indicates an actionable user action.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <PrimaryStory />
          <Stories title={''} />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

export const Default: ComponentStory<typeof Button> = () => (
  <Button onClick={action('click')}>Button</Button>
);

export const Square: ComponentStory<typeof Button> = () => (
  <Button square>
    <Icon name='plus' size='x20' />
  </Button>
);

export const Variants: ComponentStory<typeof Button> = () => (
  <ButtonGroup>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Box display='flex' flexDirection='column'>
      <Button m='2px' danger>
        Danger
      </Button>
      <Button m='2px' secondaryDanger>
        Secondary Danger
      </Button>
    </Box>
    <Box display='flex' flexDirection='column'>
      <Button m='2px' warning>
        Warning
      </Button>
      <Button m='2px' secondaryWarning>
        Secondary Warning
      </Button>
    </Box>
    <Box display='flex' flexDirection='column'>
      <Button m='2px' success>
        Success
      </Button>
      <Button m='2px' secondarySuccess>
        Secondary Success
      </Button>
    </Box>
  </ButtonGroup>
);

export const Sizes: ComponentStory<typeof ButtonGroup> = () => (
  <>
    <ButtonGroup marginBlockEnd={12}>
      <Button small>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mini square>
        <Icon name='circled-arrow-down' size='x16' />
      </Button>
      <Button tiny square>
        <Icon name='circled-arrow-down' size='x20' />
      </Button>
      <Button small square>
        <Icon name='circled-arrow-down' size='x24' />
      </Button>
      <Button square>
        <Icon name='circled-arrow-down' size='x20' />
      </Button>
    </ButtonGroup>
  </>
);

export const AsLink: ComponentStory<typeof Button> = () => (
  <Button is='a' href='https://rocket.chat' external>
    Button
  </Button>
);

export const States = () => (
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
        'square + icon': {
          square: true,
          children: <Icon name='circled-arrow-down' size='x20' />,
        },
        'icon + text': {
          children: (
            <>
              <Icon name='baloon-text' size='x16' /> Button
            </>
          ),
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
          secondaryDanger: true,
        },
        'warning': {
          children: 'Button',
          warning: true,
        },
        'secondary-warning': {
          children: 'Button',
          secondaryWarning: true,
        },
        'success': {
          children: 'Button',
          success: true,
        },
        'secondary-success': {
          children: 'Button',
          secondarySuccess: true,
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
        'square + icon': {
          square: true,
          children: <Icon name='circled-arrow-down' size='x20' />,
        },
        'icon + text': {
          children: (
            <>
              <Icon name='baloon-text' size='x16' /> Button
            </>
          ),
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
          secondaryDanger: true,
        },
        'warning': {
          children: 'Button',
          warning: true,
        },
        'secondary-warning': {
          children: 'Button',
          secondaryWarning: true,
        },
        'success': {
          children: 'Button',
          success: true,
        },
        'secondary-success': {
          children: 'Button',
          secondarySuccess: true,
        },
      }}
    />
  </>
);

export const AsIconButton: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} icon='arrow-back' onClick={action('click')} />
);

// export const Variants = Group.bind({});
// export const Variants = Group.bind({});
// export const Variants = Group.bind({});
// export const Variants = Group.bind({});
