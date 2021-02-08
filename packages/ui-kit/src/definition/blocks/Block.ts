import { ActionsBlock } from './ActionsBlock';
import { ConditionalBlock } from './ConditionalBlock';
import { ContextBlock } from './ContextBlock';
import { DividerBlock } from './DividerBlock';
import { ImageBlock } from './ImageBlock';
import { InputBlock } from './InputBlock';
import { SectionBlock } from './SectionBlock';

export type Block =
  | ActionsBlock
  | ConditionalBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | InputBlock
  | SectionBlock;
