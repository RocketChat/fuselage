import { BlockElement } from '../blocks/BlockElement';
import { BlockElementType } from '../blocks/BlockElementType';
import { BlockContext } from './BlockContext';
import { BlockElementRenderer } from './BlockElementRenderer';
import { ISurfaceRenderer } from './ISurfaceRenderer';

const getBlockElementRenderer = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>,
  type: BlockElement['type']
): BlockElementRenderer<OutputElement> | undefined => {
  const renderer = renderers[type] as
    | BlockElementRenderer<OutputElement>
    | undefined;

  if (renderer) {
    return renderer;
  }

  switch (type) {
    case BlockElementType.DATEPICKER:
      return renderers.datePicker as
        | BlockElementRenderer<OutputElement>
        | undefined;

    case BlockElementType.STATIC_SELECT:
      return renderers.staticSelect as
        | BlockElementRenderer<OutputElement>
        | undefined;

    case BlockElementType.MULTI_STATIC_SELECT:
      return renderers.multiStaticSelect as
        | BlockElementRenderer<OutputElement>
        | undefined;

    case BlockElementType.PLAIN_TEXT_INPUT:
      return renderers.plainInput as
        | BlockElementRenderer<OutputElement>
        | undefined;

    case BlockElementType.LINEAR_SCALE:
      return renderers.linearScale as
        | BlockElementRenderer<OutputElement>
        | undefined;
  }
};

export const renderBlockElement = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>,
  context: BlockContext
) => (blockElement: BlockElement, index: number): OutputElement | null => {
  const renderer = getBlockElementRenderer(renderers, blockElement.type);

  if (!renderer) {
    return null;
  }

  return renderer.call(renderers, blockElement, context, index);
};
