import type { Meta, Story } from '@storybook/react';

import InformationTooltipTrigger from './InformationTooltipTrigger';

export default {
  title: 'common/InformationTooltipTrigger',
  component: InformationTooltipTrigger,
  argTypes: {
    text: {
      control: { type: 'text' },
      defaultValue: 'Some tooltip text',
    },
  },
} as Meta;

export const _InformationTooltipTrigger: Story = (args) => (
  <InformationTooltipTrigger text={args.text} />
);
_InformationTooltipTrigger.storyName = 'InformationTooltipTrigger';
_InformationTooltipTrigger.parameters = {
  layout: 'centered',
  loki: {
    skip: true,
  },
};
