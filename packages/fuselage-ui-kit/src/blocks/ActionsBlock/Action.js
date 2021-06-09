import { Box } from '@rocket.chat/fuselage';
import { BlockContext, ElementType } from '@rocket.chat/ui-kit';
import React from 'react';

const Action = ({ element, parser }) => {
  const renderedElement = parser.renderActions(
    element,
    BlockContext.ACTION,
    parser
  );

  if (!renderedElement) {
    return null;
  }

  return (
    <Box
      display='flex'
      margin={4}
      flexGrow={element.type !== ElementType.BUTTON ? 1 : undefined}
      flexBasis={element.type !== ElementType.BUTTON ? '45%' : undefined}
    >
      {renderedElement}
    </Box>
  );
};

export default Action;
