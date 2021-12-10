import { Box } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { FC } from 'react';

import { BlockProps } from '../../utils/BlockProps';
import { ContextElementItem } from './ContextElementItem';

type ContextElementProps = BlockProps<UiKit.ContextBlock>;

export const ContextElement: FC<ContextElementProps> = ({
  block,
  surfaceRenderer,
  className,
}) => (
  <Box
    className={className}
    display='flex'
    alignItems='center'
    margin={-4}
    withTruncatedText
  >
    {block.elements.map((element, i) => (
      <ContextElementItem
        index={i}
        key={i}
        element={element}
        surfaceRenderer={surfaceRenderer}
      />
    ))}
  </Box>
);
