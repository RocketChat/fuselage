import { Box } from '@rocket.chat/fuselage';
import { BlockContext, ElementType } from '@rocket.chat/ui-kit';
import React from 'react';

const Item = ({ element, parser }) => {
  const renderedElement = parser.renderContext(
    element,
    BlockContext.CONTEXT,
    parser
  );

  if (!renderedElement) {
    return null;
  }

  switch (element.type) {
    case ElementType.PLAIN_TEXT:
    case ElementType.MARKDOWN:
      return (
        <Box is='span' fontScale='c1' color='info' margin={4}>
          {renderedElement}
        </Box>
      );

    default:
      return renderedElement;
  }
};

const ContextBlock = ({ elements, parser }) => (
  <Box display='flex' alignItems='center' margin={-4}>
    {elements.map((element, i) => (
      <Item key={i} element={element} parser={parser} />
    ))}
  </Box>
);

export default ContextBlock;
