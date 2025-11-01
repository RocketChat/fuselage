import { forwardRef } from 'react';

import Box, { type BoxProps } from '../Box/index.js';
import Scrollable from '../Scrollable/index.js';
import Tile from '../Tile/index.js';

export type OptionContainerProps = BoxProps;

const OptionContainer = forwardRef<HTMLElement, OptionContainerProps>(
  function OptionContainer({ children, ...props }, ref) {
    return (
      <Box rcx-options>
        <Tile padding={0} paddingBlock={'x12'} paddingInline={0}>
          <Scrollable vertical smooth>
            <Tile
              ref={ref}
              elevation='0'
              padding='none'
              maxHeight='x240'
              {...props}
            >
              {children}
            </Tile>
          </Scrollable>
        </Tile>
      </Box>
    );
  },
);

export default OptionContainer;
