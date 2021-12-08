import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Callout } from '../..';

export default {
  title: 'Misc/Callout_new',
  component: Callout,
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => (
  <>
    <Callout title='This is a generic message'>{args.children}</Callout>
    <Callout title='This is a successful message' type='success'>
      {args.children}
    </Callout>
    <Callout title='This is a warning message' type='warning'>
      {args.children}
    </Callout>
    <Callout title='This is a danger message' type='danger'>
      {args.children}
    </Callout>
  </>
);

export const Default = Template.bind({});

export const WithDescription = Template.bind({});
WithDescription.args = {
  children: 'This is a generic description.',
};

export const WithDescriptionOnly = () => (
  <>
    <Callout>This is a generic description.</Callout>
    <Callout type='success'>This is a successful description.</Callout>
    <Callout type='warning'>This is a warning description.</Callout>
    <Callout type='danger'>This is a danger description.</Callout>
  </>
);
