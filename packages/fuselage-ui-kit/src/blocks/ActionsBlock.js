import { Button, Margins, Flex, Box } from '@rocket.chat/fuselage';
import { BLOCK_CONTEXT } from '@rocket.chat/ui-kit';
import React, { useState } from 'react';

const getStyle = ({ type }) => {
  switch (type) {
    case 'button': // ELEMENT_TYPES.BUTTON :
      return 'auto';
    default:
      return '45%';
  }
};

const ActionsBlock = ({ blockId, appId, elements, parser }) => {
  const [showMoreVisible, setShowMoreVisible] = useState(
    () => elements.length > 5
  );
  const renderedElements = (showMoreVisible
    ? elements.slice(0, 5)
    : elements
  ).map((element, i) => (
    <Margins key={i} all='x8'>
      <Flex.Item basis={getStyle(element)}>
        {parser.renderActions(
          { blockId, appId, ...element },
          BLOCK_CONTEXT.ACTION,
          parser
        )}
      </Flex.Item>
    </Margins>
  ));

  const handleShowMoreClick = () => {
    setShowMoreVisible(false);
  };

  return (
    <Margins blockEnd='x16'>
      <Box display='flex' flexWrap='wrap' m='neg-x8'>
        {renderedElements}
        {showMoreVisible && (
          <Button onClick={handleShowMoreClick}>Show more...</Button>
        )}
      </Box>
    </Margins>
  );
};

export default ActionsBlock;
