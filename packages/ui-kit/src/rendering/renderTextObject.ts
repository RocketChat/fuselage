import { TextObject } from '../blocks/TextObject';
import { TextObjectType } from '../blocks/TextObjectType';
import { BlockContext } from './BlockContext';
import { ISurfaceRenderer } from './ISurfaceRenderer';
import { TextObjectRenderer } from './TextObjectRenderer';

const getTextObjectRenderer = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>,
  type: TextObject['type']
): TextObjectRenderer<OutputElement> | undefined => {
  const renderer = renderers[type] as
    | TextObjectRenderer<OutputElement>
    | undefined;

  if (renderer) {
    return renderer;
  }

  switch (type) {
    case TextObjectType.PLAIN_TEXT:
      return (renderers.plainText ?? renderers.text) as
        | TextObjectRenderer<OutputElement>
        | undefined;

    case TextObjectType.MARKDOWN:
      return renderers.text as TextObjectRenderer<OutputElement> | undefined;
  }
};

export const renderTextObject =
  <OutputElement>(
    renderers: ISurfaceRenderer<OutputElement>,
    context: BlockContext
  ) =>
  (textObject: TextObject, index: number): OutputElement | null => {
    const renderer = getTextObjectRenderer(renderers, textObject.type);

    if (!renderer) {
      return null;
    }

    return renderer.call(renderers, textObject, context, index);
  };
