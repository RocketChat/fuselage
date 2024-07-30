import type { ComponentProps } from 'react';
import React, { forwardRef, memo } from 'react';

import type { Box } from '..';
import { StatesIcon, States, StatesTitle, StatesSubtitle } from '..';
import ContextualbarContent from './ContextualbarContent';

type ContextualbarEmptyContentProps = ComponentProps<typeof Box> & {
  icon?: ComponentProps<typeof StatesIcon>['name'];
  title?: string;
  subtitle?: string;
};

const ContextualbarEmptyContent = forwardRef<
  HTMLElement,
  ContextualbarEmptyContentProps
>(function ContextualbarEmptyContent(
  { icon = 'magnifier', title = 'Nothing Found', subtitle, ...props },
  ref
) {
  return (
    <ContextualbarContent justifyContent='center' {...props} ref={ref}>
      <States>
        <StatesIcon name={icon} />
        <StatesTitle>{title}</StatesTitle>
        {subtitle && <StatesSubtitle>{subtitle}</StatesSubtitle>}
      </States>
    </ContextualbarContent>
  );
});

export default memo(ContextualbarEmptyContent);
