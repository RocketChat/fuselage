import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import GridItem from './GridItem';

/** @public */
export type GridProps = BoxProps & {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

/** @public */
function Grid({ xs, sm, md, lg, xl, ...props }: GridProps) {
  return (
    <Box rcx-grid__wrapper>
      <Box
        rcx-grid
        rcx-grid--xs={xs}
        rcx-grid--sm={sm}
        rcx-grid--md={md}
        rcx-grid--lg={lg}
        rcx-grid--xl={xl}
        {...props}
      />
    </Box>
  );
}

/** @public */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Grid {
  export const Item = GridItem;
}

export default Grid;
