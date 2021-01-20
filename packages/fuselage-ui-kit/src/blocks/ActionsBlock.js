import { Box, Button } from '@rocket.chat/fuselage';
import { BlockContext, ElementType } from '@rocket.chat/ui-kit';
import React, { useCallback, useState } from 'react';

const Action = ({ blockId, appId, element, parser }) => {
  const renderedElement = parser.renderActions(
    { blockId, appId, ...element },
    BlockContext.ACTION,
    parser
  );

  if (!renderedElement) {
    return null;
  }

  return (
    <Box
      display='flex'
      margin={8}
      flexGrow={element.type !== ElementType.BUTTON ? 1 : undefined}
      flexBasis={element.type !== ElementType.BUTTON ? '45%' : undefined}
    >
      {renderedElement}
    </Box>
  );
};

const ActionsBlock = ({ blockId, appId, elements, parser }) => {
  const [showMoreVisible, setShowMoreVisible] = useState(
    () => elements.length > 5
  );

  const handleShowMoreClick = useCallback(() => {
    setShowMoreVisible(false);
  }, []);

  return (
    <Box display='flex' flexWrap='wrap' margin={-8}>
      {(showMoreVisible ? elements.slice(0, 5) : elements).map((element, i) => (
        <Action
          key={i}
          blockId={blockId}
          appId={appId}
          element={element}
          parser={parser}
        />
      ))}
      {showMoreVisible && (
        <Button onClick={handleShowMoreClick}>Show more...</Button>
      )}
    </Box>
  );
};

export default ActionsBlock;
