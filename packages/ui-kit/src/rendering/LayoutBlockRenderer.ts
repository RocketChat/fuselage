import { RenderableLayoutBlock } from '../blocks/RenderableLayoutBlock';
import { BlockContext } from './BlockContext';

export type LayoutBlockRenderer<
  T,
  B extends RenderableLayoutBlock = RenderableLayoutBlock
> = (layoutBlock: B, context: BlockContext.BLOCK, index: number) => T | null;
