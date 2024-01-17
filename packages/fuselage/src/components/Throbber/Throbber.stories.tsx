import { action } from '@storybook/addon-actions';
import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Throbber, Button, Box } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Data Display/Throbber',
  component: Throbber,
  parameters: {
    docs: {
      description: {
        component: 'Indicates content that has not loaded yet.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={'Props from InputBox'} />
        </>
      ),
    },
  },
} as Meta<typeof Throbber>;

const Template: StoryFn<typeof Throbber> = (args) => <Throbber {...args} />;

export const Default: StoryFn<typeof Throbber> = Template.bind({});

export const Disabled: StoryFn<typeof Throbber> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const InsideButton: StoryFn<typeof Throbber> = () => (
  <Button minHeight='x40'>
    <Throbber size='x12' />
  </Button>
);

export const InsideButtonInheritColor = () => (
  <Box>
    <Button primary danger minHeight='x40' marginInlineEnd='5px'>
      <Throbber size='x12' inheritColor />
    </Button>
    <Button primary minHeight='x40'>
      <Throbber size='x12' inheritColor />
    </Button>
  </Box>
);

export const States: StoryFn<typeof Throbber> = () => (
  <PropsVariationSection
    component={Throbber}
    common={{ onClick: action('click') }}
    yAxis={{
      'default': {},
      '3 circles + x40': { circleCount: 3, size: 'x40' },
      '5 circles + x32': { circleCount: 5, size: 'x32' },
      '7 circles + x24': { circleCount: 7, size: 'x24' },
    }}
    xAxis={{
      default: {},
      disabled: { disabled: true },
    }}
  />
);
