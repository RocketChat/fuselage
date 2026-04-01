import type { ComponentPropsWithoutRef, ReactElement } from 'react';
import { useMemo } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';
import { Icon } from '../Icon';

const ChevronFrame = styled(RcxView, {
  name: 'Chevron',
  display: 'inline-flex',
  alignSelf: 'center',
});

export type ChevronProps = ComponentPropsWithoutRef<typeof ChevronFrame> & {
  size?: ComponentPropsWithoutRef<typeof Icon>['size'];
  up?: boolean;
  right?: boolean;
  left?: boolean;
  down?: boolean;
};

function getRotation({
  up,
  right,
  down,
  left,
}: Pick<ChevronProps, 'up' | 'right' | 'down' | 'left'>): string {
  if (up) return '-180deg';
  if (right) return '-90deg';
  if (left) return '-270deg';
  if (down) return '0deg';
  return '0deg';
}

function Chevron({
  up,
  right,
  down,
  left,
  size,
  ...props
}: ChevronProps): ReactElement {
  const children = useMemo(
    () => <Icon name='chevron-down' size={size} />,
    [size],
  );

  const rotate = getRotation({ up, right, down, left });

  return (
    <ChevronFrame
      {...props}
      style={{ transform: `rotate(${rotate})` }}
    >
      {children}
    </ChevronFrame>
  );
}

export default Chevron;
