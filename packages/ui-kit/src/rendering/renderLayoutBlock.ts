import { LayoutBlock } from '../blocks/LayoutBlock';
import { ConditionalBlock } from '../blocks/layout/ConditionalBlock';
import { BlockContext } from './BlockContext';
import { ISurfaceRenderer } from './ISurfaceRenderer';
import { LayoutBlockRenderer } from './LayoutBlockRenderer';

const getLayoutBlockRenderer = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>,
  type: Exclude<LayoutBlock, ConditionalBlock>['type']
): LayoutBlockRenderer<OutputElement> | undefined =>
  renderers[type] as LayoutBlockRenderer<OutputElement> | undefined;

export const renderLayoutBlock =
  <OutputElement>(renderers: ISurfaceRenderer<OutputElement>) =>
  (
    layoutBlock: Exclude<LayoutBlock, ConditionalBlock>,
    index: number
  ): OutputElement | null => {
    const renderer = getLayoutBlockRenderer(renderers, layoutBlock.type);

    if (!renderer) {
      return null;
    }

    return renderer.call(renderers, layoutBlock, BlockContext.BLOCK, index);
  };
