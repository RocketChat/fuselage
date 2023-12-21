import {
  MyComponent,
  Button,
  config,
  TamaguiProvider,
} from '@rocket.chat/fuselage-core/src';
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

import { PropsVariationSection } from '../../../../.storybook/helpers';
import { ButtonGroup } from '../../ButtonGroup';
import Margins from '../../Margins';

// import type { ButtonGroup } from '../..';
// import { IconButton, Margins } from '../..';

export default {
  title: 'Inputs/Button/V2',
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
  <TamaguiProvider config={config} defaultTheme='light'>
    <Button danger>Button</Button>
  </TamaguiProvider>
);

export const MyComponents: ComponentStory<typeof MyComponent> = () => (
  <TamaguiProvider config={config} defaultTheme='light'>
    <MyComponent>Button</MyComponent>
  </TamaguiProvider>
);

// export const Loading: ComponentStory<typeof Button> = () => (
//   <Button>Button</Button>
// );
// export const LoadingInteraction: ComponentStory<typeof Button> = () => {
//   const [isLoading, setIsLoading] = React.useState(false);
//   return (
//     <Button
//       icon='add-user'
//       loading={isLoading}
//       onClick={() => setIsLoading(!isLoading)}
//     >
//       Button
//     </Button>
//   );
// };

// LoadingInteraction.parameters = {
//   docs: {
//     description: {
//       story: 'Click the button to see the loading state.',
//     },
//   },
// };

export const Variants: ComponentStory<typeof Button> = () => (
  <Margins all='x8'>
    <ButtonGroup>
      <Button primary>Primary</Button>
      {/* <Button secondary>Secondary</Button> */}
    </ButtonGroup>
    <ButtonGroup>
      {/* <Button danger>Danger</Button> */}
      {/* <Button secondary danger>
        Secondary Danger
      </Button> */}
    </ButtonGroup>
    {/* <ButtonGroup>
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
    </ButtonGroup> */}
  </Margins>
);

// export const Sizes: ComponentStory<typeof ButtonGroup> = () => (
//   <ButtonGroup marginBlockEnd={12}>
//     <Button small>Small</Button>
//     <Button medium>Medium</Button>
//     <Button>Default</Button>
//   </ButtonGroup>
// );

// export const AsLink: ComponentStory<typeof Button> = () => (
//   <Button is='a' href='https://rocket.chat' external>
//     Button
//   </Button>
// );

export const States = () => (
  <TamaguiProvider config={config} defaultTheme='light'>
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
        size: '$sm',
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
  </TamaguiProvider>
);

// export const AsIconButton: ComponentStory<typeof IconButton> = (args) => (
//   <IconButton {...args} icon='arrow-back' onClick={action('click')} />
// );

// AsIconButton.parameters = {
//   docs: {
//     description: {
//       story:
//         'See full IconButton documentation [here](../?path=/docs/inputs-iconbutton)',
//     },
//   },
// };
