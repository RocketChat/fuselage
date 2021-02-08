import { BlockElement } from './element/BlockElement';
import { LayoutBlock } from './layout/LayoutBlock';
import { TextObject } from './text/TextObject';

export type Block = TextObject | BlockElement | LayoutBlock;
