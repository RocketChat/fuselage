import React, { useState } from 'react';
import {
  Button,
  Margins,
  MarginsWrapper,
  Flex,
  Box,
} from '@rocket.chat/fuselage';
import {
  BLOCK_CONTEXT,
} from '@rocket.chat/ui-kit';

import { Block } from './Block';

const getStyle = ({ type }) => {
  switch (type) {
  case 'button':// ELEMENT_TYPES.BUTTON :
    return 'auto';
  default:
    return '45%';
  }
};

export const Actions = ({ blockId, appId, elements, parser }) => {
  const [showMoreVisible, setShowMoreVisible] = useState(
    () => elements.length > 5,
  );
  const renderedElements = (showMoreVisible
    ? elements.slice(0, 5)
    : elements
  ).map((element, i) => <Margins key={i} all={8}><Flex.Item basis={getStyle(element)}>{parser.renderActions({ blockId, appId, ...element }, BLOCK_CONTEXT.ACTION, parser)}</Flex.Item></Margins>);

  const handleShowMoreClick = () => {
    setShowMoreVisible(false);
  };

  return (
    <Block>
      <MarginsWrapper all={8}>
        <Flex.Container wrap='wrap'>
          <Box>
            {renderedElements}
            {showMoreVisible && (<Flex.Item><Button onClick={handleShowMoreClick}>Show more...</Button></Flex.Item>)}
          </Box>
        </Flex.Container>
      </MarginsWrapper>
    </Block>
  );
};
