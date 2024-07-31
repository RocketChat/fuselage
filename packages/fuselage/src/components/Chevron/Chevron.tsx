import type { ReactElement } from 'react';
import { useMemo } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import { Icon } from '../Icon';

/** @public */
export type ChevronProps = Omit<BoxProps, 'size'> & {
  size?: BoxProps['width'];
  up?: boolean;
  right?: boolean;
  left?: boolean;
  down?: boolean;
  top?: boolean;
  bottom?: boolean;
};

/** @public */
function Chevron({
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

export default Chevron;
