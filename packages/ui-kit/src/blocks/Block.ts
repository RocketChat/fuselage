import { BlockElement } from './BlockElement';
import { LayoutBlock } from './LayoutBlock';
import { TextObject } from './TextObject';

export type Block = TextObject | BlockElement | LayoutBlock;
