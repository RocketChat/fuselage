import { ActionsBlock } from './layout/ActionsBlock';
import { ConditionalBlock } from './layout/ConditionalBlock';
import { ContextBlock } from './layout/ContextBlock';
import { DividerBlock } from './layout/DividerBlock';
import { ImageBlock } from './layout/ImageBlock';
import { InputBlock } from './layout/InputBlock';
import { PreviewBlock } from './layout/PreviewBlock';
import { SectionBlock } from './layout/SectionBlock';

export type LayoutBlock =
  | PreviewBlock
  | ActionsBlock
  | ConditionalBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | InputBlock
  | SectionBlock
  | PreviewBlock;
