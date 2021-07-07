import { Box } from '@rocket.chat/fuselage';
import { ContextBlockElements } from '@rocket.chat/ui-kit/dist/esm/blocks/layout/ContextBlock';
import { BaseSurfaceRenderer } from '@rocket.chat/ui-kit/dist/esm/rendering/BaseSurfaceRenderer';
import React, { FC } from 'react';

import { ContextElementItem } from './ContextElementItem';

export const ContextElement: FC<{
  className?: string;
  elements: ContextBlockElements[];
  parser: BaseSurfaceRenderer<FC>;
  index: number;
}> = ({ elements, parser, className, index }) => (
  <Box
    className={className}
    display='flex'
    alignItems='center'
    margin={-4}
    withTruncatedText
  >
    {elements.map((element, i) => (
      <ContextElementItem
        index={index}
        key={i}
        element={element}
        parser={parser}
      />
    ))}
  </Box>
);
