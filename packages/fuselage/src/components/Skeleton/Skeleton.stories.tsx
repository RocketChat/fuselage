import type { StoryFn, Meta } from '@storybook/react';

import { Skeleton } from './Skeleton';

export default {
  title: 'Layout/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default: StoryFn<typeof Skeleton> = Template.bind({});

export const RectVariant: StoryFn<typeof Skeleton> = Template.bind({});
RectVariant.args = {
  variant: 'rect',
  width: '50%',
  height: 100,
};

export const CircleVariant: StoryFn<typeof Skeleton> = Template.bind({});
CircleVariant.args = {
  variant: 'circle',
  width: 16,
  height: 16,
};
