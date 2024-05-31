import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
  Subtitle,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Button } from '../..';

export default {
  title: 'Layout/Box/isProp',
  component: Box,
  parameters: {
    docs: {
      description: {
        component:
          'The `is` prop is used to render the Box as a different HTML tag. It can also be used to render a different fuselage component.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Stories />
          <ArgsTable />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const isButton = Template.bind({});
isButton.args = {
  is: Button,
  children: 'A Box rendering a Button',
};
isButton.storyName = 'is Button';

export const isSpan = Template.bind({});
isSpan.args = {
  is: 'span',
  children: 'A Box rendering a span',
};
isSpan.storyName = 'is span';

export const isH4 = Template.bind({});
isH4.args = {
  is: 'h4',
  children: 'A Box rendering a h4',
};
isH4.storyName = 'is h4';

export const asLink = Template.bind({});
asLink.args = {
  is: 'a',
  onClick: () => null,
  children: 'A Box rendering as a link',
};
