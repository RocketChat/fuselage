import { TextObject } from '../blocks/TextObject';
import { BlockElementRenderers } from './BlockElementRenderers';
import { LayoutBlockRenderers } from './LayoutBlockRenderers';
import { TextObjectRenderer } from './TextObjectRenderer';

export type BlockRenderers<OutputElement> = {
  [B in TextObject as B['type']]: TextObjectRenderer<OutputElement, B>;
} &
  Partial<BlockElementRenderers<OutputElement>> &
  Partial<LayoutBlockRenderers<OutputElement>>;
