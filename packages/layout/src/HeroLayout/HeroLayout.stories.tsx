import type { Meta, Story } from '@storybook/react';

import { HeroLayout, HeroLayoutSubtitle, HeroLayoutTitle } from './HeroLayout';

export default {
  title: 'HeroLayout',
  component: HeroLayout,
} as Meta;

export const Default: Story = () => (
  <HeroLayout>
    <HeroLayoutTitle>Title</HeroLayoutTitle>
    <HeroLayoutSubtitle>Subtitle</HeroLayoutSubtitle>
  </HeroLayout>
);
