import type { Story } from '@storybook/react';

import { RcReactRootWrapper, RcBodyWrapper } from './rcAppDecorator.styles';

export const rcAppDecorator = (Story: Story) => (
  <RcBodyWrapper>
    <RcReactRootWrapper>
      <Story />
    </RcReactRootWrapper>
  </RcBodyWrapper>
);
