import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';
import type { ComponentType } from 'react';
import { useState } from 'react';

import { PropsVariationSection } from '../../../.storybook/helpers';
import { ButtonGroup } from '../ButtonGroup';
import Margins from '../Margins';
import Button from './Button';
import { IconButton } from './IconButton';

export default {
  title: 'Inputs/Button',
  component: Button,
  subcomponents: { IconButton: IconButton as ComponentType<any> },
} satisfies Meta<typeof Button>;

export const Default: StoryFn<typeof Button> = () => (
  <Button onClick={action('click')}>Button</Button>
);

export const Loading: StoryFn<typeof Button> = () => (
  <Button loading onClick={action('click')}>
    Button
  </Button>
);
export const LoadingInteraction: StoryFn<typeof Button> = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Button
      icon='add-user'
      loading={isLoading}
      onClick={() => setIsLoading(!isLoading)}
    >
      Button
    </Button>
  );
};

LoadingInteraction.parameters = {
  docs: {
    description: {
      story: 'Click the button to see the loading state.',
    },
  },
};

export const Variants: StoryFn<typeof Button> = () => (
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
);

export const Sizes: StoryFn<typeof ButtonGroup> = () => (
  <ButtonGroup>
    <Button small>Small</Button>
    <Button medium>Medium</Button>
    <Button>Default</Button>
  </ButtonGroup>
);

export const AsLink: StoryFn<typeof Button> = () => (
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
);

export const AsIconButton: StoryFn<typeof IconButton> = (args) => (
  <IconButton {...args} icon='arrow-back' onClick={action('click')} />
);
AsIconButton.parameters = {
  docs: {
    description: {
      story:
        'See full IconButton documentation [here](../?path=/docs/inputs-iconbutton)',
    },
  },
};
