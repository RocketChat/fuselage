import { LayoutBlock } from '../blocks/LayoutBlock';
import { ConditionalBlock } from '../blocks/layout/ConditionalBlock';
import { LayoutBlockRenderer } from './LayoutBlockRenderer';

export type LayoutBlockRenderers<OutputElement> = {
  [B in Exclude<
    LayoutBlock,
    ConditionalBlock
  > as B['type']]: LayoutBlockRenderer<OutputElement, B>;
};
