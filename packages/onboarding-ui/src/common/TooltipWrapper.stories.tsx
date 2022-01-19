import { Box } from '@rocket.chat/fuselage';
import type { Meta, Story } from '@storybook/react';

import TooltipWrapper from './TooltipWrapper';

export default {
  title: 'common/TooltipWrapper',
  component: TooltipWrapper,
} as Meta;

export const WithRenderProp: Story = () => (
  <TooltipWrapper text='A example tooltip'>
    {({ ref, toggle, id }) => (
      <Box
        ref={ref}
        onMouseEnter={() => toggle(true)}
        onMouseLeave={() => toggle(false)}
        onFocus={() => toggle(true)}
        onBlur={() => toggle(false)}
        tabIndex={0}
        aria-describedby={id}
      >
        Text
      </Box>
    )}
  </TooltipWrapper>
);
WithRenderProp.parameters = {
  layout: 'centered',
};

export const WithElement: Story = () => (
  <TooltipWrapper text='A example tooltip'>
    <Box tabIndex={0}>Text</Box>
  </TooltipWrapper>
);
WithElement.parameters = {
  layout: 'centered',
};
