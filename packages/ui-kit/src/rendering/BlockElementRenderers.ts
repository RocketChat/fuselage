import { BlockElement } from '../blocks/BlockElement';
import { BlockElementRenderer } from './BlockElementRenderer';

export type BlockElementRenderers<OutputElement> = {
  [B in BlockElement as B['type']]: BlockElementRenderer<OutputElement, B>;
};
