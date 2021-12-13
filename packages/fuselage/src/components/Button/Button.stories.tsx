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
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button, ButtonGroup, Icon } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Buttons/Button_new',
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
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof ButtonGroup>;

export const Default = () => <Button onClick={action('click')}>Button</Button>;

const Group: ComponentStory<typeof Button> = (args) => (
  <ButtonGroup>
    <Button {...args}>Neutral</Button>
    <Button {...args} info>
      Info
    </Button>
    <Button {...args} success>
      Success
    </Button>
    <Button {...args} warning>
      Warning
    </Button>
    <Button {...args} danger>
      Danger
    </Button>
  </ButtonGroup>
);

export const Variants: ComponentStory<typeof Button> = Group.bind({});

export const Primary: ComponentStory<typeof Button> = Group.bind({});
Primary.args = {
  primary: true,
};

export const Ghost: ComponentStory<typeof Button> = Group.bind({});
Ghost.args = {
  ghost: true,
};

export const Nude: ComponentStory<typeof Button> = Group.bind({});
Nude.args = {
  nude: true,
};

export const Ghostish: ComponentStory<typeof Button> = Group.bind({});
Ghostish.args = {
  ghostish: true,
};

export const Square: ComponentStory<typeof Button> = () => (
  <Button square>
    <Icon name='plus' size='x20' />
  </Button>
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
        'info': {
          children: 'Button',
          info: true,
        },
        'success': {
          children: 'Button',
          success: true,
        },
        'warning': {
          children: 'Button',
          warning: true,
        },
        'danger': {
          children: 'Button',
          danger: true,
        },
        'primary': {
          children: 'Button',
          primary: true,
        },
        'primary + info': {
          children: 'Button',
          primary: true,
          info: true,
        },
        'primary + success': {
          children: 'Button',
          primary: true,
          success: true,
        },
        'primary + warning': {
          children: 'Button',
          primary: true,
          warning: true,
        },
        'primary + danger': {
          children: 'Button',
          primary: true,
          danger: true,
        },
        'ghost': {
          children: 'Button',
          ghost: true,
        },
        'ghost + info': {
          children: 'Button',
          ghost: true,
          info: true,
        },
        'ghost + success': {
          children: 'Button',
          ghost: true,
          success: true,
        },
        'ghost + warning': {
          children: 'Button',
          ghost: true,
          warning: true,
        },
        'ghost + danger': {
          children: 'Button',
          ghost: true,
          danger: true,
        },
        'nude': {
          children: 'Button',
          nude: true,
        },
        'nude + info': {
          children: 'Button',
          nude: true,
          info: true,
        },
        'nude + success': {
          children: 'Button',
          nude: true,
          success: true,
        },
        'nude + warning': {
          children: 'Button',
          nude: true,
          warning: true,
        },
        'nude + danger': {
          children: 'Button',
          nude: true,
          danger: true,
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
        'info': {
          children: 'Button',
          info: true,
        },
        'success': {
          children: 'Button',
          success: true,
        },
        'warning': {
          children: 'Button',
          warning: true,
        },
        'danger': {
          children: 'Button',
          danger: true,
        },
        'primary': {
          children: 'Button',
          primary: true,
        },
        'primary + info': {
          children: 'Button',
          primary: true,
          info: true,
        },
        'primary + success': {
          children: 'Button',
          primary: true,
          success: true,
        },
        'primary + warning': {
          children: 'Button',
          primary: true,
          warning: true,
        },
        'primary + danger': {
          children: 'Button',
          primary: true,
          danger: true,
        },
        'ghost': {
          children: 'Button',
          ghost: true,
        },
        'ghost + info': {
          children: 'Button',
          ghost: true,
          info: true,
        },
        'ghost + success': {
          children: 'Button',
          ghost: true,
          success: true,
        },
        'ghost + warning': {
          children: 'Button',
          ghost: true,
          warning: true,
        },
        'ghost + danger': {
          children: 'Button',
          ghost: true,
          danger: true,
        },
        'nude': {
          children: 'Button',
          nude: true,
        },
        'nude + info': {
          children: 'Button',
          nude: true,
          info: true,
        },
        'nude + success': {
          children: 'Button',
          nude: true,
          success: true,
        },
        'nude + warning': {
          children: 'Button',
          nude: true,
          warning: true,
        },
        'nude + danger': {
          children: 'Button',
          nude: true,
          danger: true,
        },
        'ghostish': {
          children: 'Button',
          ghostish: true,
        },
        'ghostish + info': {
          children: 'Button',
          ghostish: true,
          info: true,
        },
        'ghostish + success': {
          children: 'Button',
          ghostish: true,
          success: true,
        },
        'ghostish + warning': {
          children: 'Button',
          ghostish: true,
          warning: true,
        },
        'ghostish + danger': {
          children: 'Button',
          ghostish: true,
          danger: true,
        },
      }}
    />
  </>
);
// export const Variants = Group.bind({});
// export const Variants = Group.bind({});
// export const Variants = Group.bind({});
// export const Variants = Group.bind({});
