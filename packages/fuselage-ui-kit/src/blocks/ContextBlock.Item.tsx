import { Box } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { ReactElement } from 'react';

type ItemProps = {
  element: UiKit.ContextBlock['elements'][number];
  parser: UiKit.SurfaceRenderer<ReactElement>;
  index: number;
};

const Item = ({ element, parser, index }: ItemProps): ReactElement => {
  const renderedElement = parser.renderContextBlockElement(element, index);

  if (!renderedElement) {
    return <></>;
  }

  switch (element.type) {
    case UiKit.TextObjectType.PLAIN_TEXT:
    case UiKit.TextObjectType.MARKDOWN:
      return (
        <Box is='span' fontScale='c1' color='info' margin={4}>
          {renderedElement}
        </Box>
      );

    default:
      return renderedElement;
  }
};

export default Item;
