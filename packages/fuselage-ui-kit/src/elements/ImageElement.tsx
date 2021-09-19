import * as UiKit from '@rocket.chat/ui-kit';
import React, { ReactElement } from 'react';

import { Element } from './ImageElement.styles';

type ImageElementProps = {
  element: UiKit.ImageElement;
  context: UiKit.BlockContext;
};

const ImageElement = ({
  element,
  context,
}: ImageElementProps): ReactElement | null => {
  const size =
    (context === UiKit.BlockContext.SECTION && 88) ||
    (context === UiKit.BlockContext.CONTEXT && 20) ||
    undefined;

  if (!size) {
    return null;
  }

  return <Element imageUrl={element.imageUrl} size={size} />;
};

export default ImageElement;
