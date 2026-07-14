import type { RefAttributes } from 'react';
import { memo } from 'react';

import type { StatesIconProps } from '..';
import { StatesIcon, States, StatesTitle, StatesSubtitle } from '..';
import type { BoxProps } from '../Box';

import ContextualbarContent from './ContextualbarContent';

export type ContextualbarEmptyContentProps = Omit<BoxProps, 'ref'> &
  RefAttributes<HTMLElement> & {
    icon?: StatesIconProps['name'];
    title?: string;
    subtitle?: string;
  };

function ContextualbarEmptyContent({
  icon = 'magnifier',
  title = 'Nothing Found',
  subtitle,
  ...props
}: ContextualbarEmptyContentProps) {
  return (
    <ContextualbarContent justifyContent='center' {...props}>
      <States>
        <StatesIcon name={icon} />
        <StatesTitle>{title}</StatesTitle>
        {subtitle && <StatesSubtitle>{subtitle}</StatesSubtitle>}
      </States>
    </ContextualbarContent>
  );
}

export default memo(ContextualbarEmptyContent);
