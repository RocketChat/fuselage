import { Box, Margins } from '@rocket.chat/fuselage';
import { BlockContext, ElementType } from '@rocket.chat/ui-kit';
import React from 'react';

const ContextBlock = ({ elements, renderContext }) => (
  <Margins blockEnd='x16'>
    <Box display='flex' alignItems='center' m='neg-x4'>
      {elements.map((element, i) => (
        <Margins all='x4' key={i}>
          {[ElementType.PLAIN_TEXT, ElementType.MARKDOWN].includes(
            element.type
          ) ? (
            <Box is='span' fontScale='c1' color='info'>
              {renderContext(element, BlockContext.CONTEXT, this)}
            </Box>
          ) : (
            renderContext(element, BlockContext.CONTEXT, this) || element.type
          )}
        </Margins>
      ))}
    </Box>
  </Margins>
);

export default ContextBlock;
