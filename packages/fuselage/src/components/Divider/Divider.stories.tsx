import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Divider } from '../..';

export default {
  title: 'Misc/Divider_new',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = () => <Divider />;

export const Default = Template.bind({});
