import type { Meta, StoryFn } from '@storybook/react';

import { HeroLayout, HeroLayoutSubtitle, HeroLayoutTitle } from './HeroLayout';

export default {
  title: 'HeroLayout',
  component: HeroLayout,
} satisfies Meta<typeof HeroLayout>;

export const Default: StoryFn<typeof HeroLayout> = () => (
  <HeroLayout>
    <HeroLayoutTitle>Title</HeroLayoutTitle>
    <HeroLayoutSubtitle>Subtitle</HeroLayoutSubtitle>
  </HeroLayout>
);
