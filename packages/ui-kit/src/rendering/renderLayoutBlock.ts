import { LayoutBlock } from '../blocks/LayoutBlock';
import { ConditionalBlock } from '../blocks/layout/ConditionalBlock';
import { BlockContext } from './BlockContext';
import { BlockRenderers } from './BlockRenderers';
import { LayoutBlockRenderer } from './LayoutBlockRenderer';

const getLayoutBlockRenderer = <T>(
  renderers: BlockRenderers<T>,
  type: Exclude<LayoutBlock, ConditionalBlock>['type']
): LayoutBlockRenderer<T> | undefined =>
  renderers[type] as LayoutBlockRenderer<T> | undefined;

export const renderLayoutBlock =
  <T>(renderers: BlockRenderers<T>) =>
  (
    layoutBlock: Exclude<LayoutBlock, ConditionalBlock>,
    index: number
  ): T | null => {
    const renderer = getLayoutBlockRenderer(renderers, layoutBlock.type);

    if (!renderer) {
      return null;
    }

    return renderer.call(renderers, layoutBlock, BlockContext.BLOCK, index);
  };
