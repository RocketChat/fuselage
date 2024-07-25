import type { IconName } from '@rocket.chat/icons';
import React, { forwardRef, memo } from 'react';

import type { BoxProps } from '../Box';
import { States, StatesIcon, StatesSubtitle, StatesTitle } from '../States';
import ContextualbarContent from './ContextualbarContent';

type ContextualbarEmptyContentProps = BoxProps & {
  icon?: IconName;
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
