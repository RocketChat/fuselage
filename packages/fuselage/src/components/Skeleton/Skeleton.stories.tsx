import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Skeleton from './Skeleton';

export default {
  title: 'Layout/Skeleton',
  component: Skeleton,
} satisfies ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Default: ComponentStory<typeof Skeleton> = Template.bind({});

export const RectVariant: ComponentStory<typeof Skeleton> = Template.bind({});
RectVariant.args = {
  variant: 'rect',
  width: '50%',
  height: 100,
};

export const CircleVariant: ComponentStory<typeof Skeleton> = Template.bind({});
CircleVariant.args = {
  variant: 'circle',
  width: 16,
  height: 16,
};
