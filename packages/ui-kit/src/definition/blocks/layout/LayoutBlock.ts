import { LayoutBlockType } from '../../../enums/LayoutBlockType';
import { ActionsBlock } from './ActionsBlock';
import { ConditionalBlock } from './ConditionalBlock';
import { ContextBlock } from './ContextBlock';
import { DividerBlock } from './DividerBlock';
import { ImageBlock } from './ImageBlock';
import { InputBlock } from './InputBlock';
import { SectionBlock } from './SectionBlock';

export type LayoutBlockMap = {
  [LayoutBlockType.ACTIONS]: ActionsBlock;
  [LayoutBlockType.CONDITIONAL]: ConditionalBlock;
  [LayoutBlockType.CONTEXT]: ContextBlock;
  [LayoutBlockType.DIVIDER]: DividerBlock;
  [LayoutBlockType.IMAGE]: ImageBlock;
  [LayoutBlockType.INPUT]: InputBlock;
  [LayoutBlockType.SECTION]: SectionBlock;
};

export type LayoutBlock = LayoutBlockMap[keyof LayoutBlockMap];
