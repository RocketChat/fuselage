import type * as UiKit from '@rocket.chat/ui-kit';
import { ReactElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const fromTextObjectToString = (
  surfaceRenderer: UiKit.SurfaceRenderer<ReactElement>,
  textObject: UiKit.TextObject,
  index: number,
  context: UiKit.BlockContext
): string | undefined => {
  const element = surfaceRenderer.renderTextObject(textObject, index, context);

  if (!element) {
    return undefined;
  }

  return renderToStaticMarkup(element);
};
