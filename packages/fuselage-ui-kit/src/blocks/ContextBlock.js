import { Box } from '@rocket.chat/fuselage';
import { BlockContext, ElementType } from '@rocket.chat/ui-kit';
import React, { memo, useMemo } from 'react';

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

const ContextBlock = ({ className, blockElement, parser }) => {
  const { appId, blockId, elements } = blockElement;

  const itemElements = useMemo(
    () => elements.map((element) => ({ appId, blockId, ...element })),
    [appId, blockId, elements]
  );

  return (
    <Box className={className} display='flex' alignItems='center' margin={-4}>
      {itemElements.map((element, i) => (
        <Item key={i} element={element} parser={parser} />
      ))}
    </Box>
  );
};

export default memo(ContextBlock);
