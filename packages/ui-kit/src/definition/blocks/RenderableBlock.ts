import { BlockElement } from './BlockElement';
import { LayoutBlock } from './LayoutBlock';
import { TextObject } from './TextObject';

export type RenderableBlock = TextObject | BlockElement | LayoutBlock;
