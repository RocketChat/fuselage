import type { Meta, StoryFn } from '@storybook/react-webpack5';

import ActionLink from './ActionLink';

export default {
  title: 'components/ActionLink',
  component: ActionLink,
} satisfies Meta<typeof ActionLink>;

export const Default: StoryFn<typeof ActionLink> = () => (
  <ActionLink>Default</ActionLink>
);
