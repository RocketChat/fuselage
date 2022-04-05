import type { ComponentProps, ReactElement } from 'react';
import React, { useMemo } from 'react';

import Box from '../Box';
import { Icon } from '../Icon';

type ChevronProps = Omit<ComponentProps<typeof Box>, 'size'> & {
  size?: ComponentProps<typeof Box>['width'];
  up?: boolean;
  right?: boolean;
  left?: boolean;
  down?: boolean;
  top?: boolean;
  bottom?: boolean;
};

export function Chevron({
  up,
  right,
  down,
  left,
  size,
  ...props
}: ChevronProps): ReactElement<ChevronProps> {
  const children = useMemo(
    () => <Icon name='chevron-down' size={size} />,
    [size]
  );

  return (
    <Box
      is='span'
      children={children}
      rcx-chevron
      rcx-chevron--up={up}
      rcx-chevron--right={right}
      rcx-chevron--down={down}
      rcx-chevron--left={left}
      {...props}
    />
  );
}
