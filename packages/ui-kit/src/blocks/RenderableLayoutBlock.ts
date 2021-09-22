import { LayoutBlock } from './LayoutBlock';
import { ConditionalBlock } from './layout/ConditionalBlock';

export type RenderableLayoutBlock = Exclude<LayoutBlock, ConditionalBlock>;
