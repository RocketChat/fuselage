import { Block } from './Block';
import { ConditionalBlock } from './layout/ConditionalBlock';

export type RenderableBlock = Exclude<Block, ConditionalBlock>;
