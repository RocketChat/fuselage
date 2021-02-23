import { BlockElementRenderers } from './BlockElementRenderers';
import { LayoutBlockRenderers } from './LayoutBlockRenderers';
import { TextObjectRenderers } from './TextObjectRenderers';

export type BlockRenderers<OutputElement> = Partial<
  TextObjectRenderers<OutputElement>
> &
  Partial<BlockElementRenderers<OutputElement>> &
  Partial<LayoutBlockRenderers<OutputElement>>;
