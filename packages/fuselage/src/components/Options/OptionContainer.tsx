import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import Scrollable from '../Scrollable';
import Tile from '../Tile';

/** @public */
export type OptionContainerProps = BoxProps;

/** @public */
const OptionContainer = forwardRef<HTMLElement, OptionContainerProps>(
  ({ children, ...props }, ref) => (
    <Box rcx-options>
      <Tile padding={0} paddingBlock={'x12'} paddingInline={0}>
        <Scrollable vertical smooth>
          <Tile
            ref={ref}
            elevation='0'
            padding='none'
            maxHeight='x240'
            // onMouseDown={prevent}
            // onClick={prevent}
            // is='ol'
            // aria-multiselectable={multiple || true}
            // role='listbox'
            {...props}
          >
            {children}
          </Tile>
        </Scrollable>
      </Tile>
    </Box>
  )
);

export default OptionContainer;
