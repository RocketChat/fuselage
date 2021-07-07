import { Box } from '@rocket.chat/fuselage';
import { BlockContext, ElementType } from '@rocket.chat/ui-kit';
import { ContextBlockElements } from '@rocket.chat/ui-kit/dist/esm/blocks/layout/ContextBlock';
import { BaseSurfaceRenderer } from '@rocket.chat/ui-kit/dist/esm/rendering/BaseSurfaceRenderer';
import React, { FC } from 'react';

export const ContextElementItem: FC<{
  element: ContextBlockElements;
  parser: BaseSurfaceRenderer<FC>;
  index: number;
}> = ({ element, parser, index }) => {
  const renderedElement = parser.renderContext(
    element,
    BlockContext.CONTEXT,
    undefined,
    index
  );

  if (!renderedElement) {
    return null;
  }

  switch (element.type) {
    case ElementType.PLAIN_TEXT:
    case ElementType.MARKDOWN:
      return (
        <Box is='span' withTruncatedText fontScale='c1' color='info' margin={4}>
          {renderedElement}
        </Box>
      );

    default:
      return <>{renderedElement}</>;
  }
};
