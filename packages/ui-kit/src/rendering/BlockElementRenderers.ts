import { BlockElementMap } from '../blocks/BlockElement';
import { BlockElementType } from '../blocks/BlockElementType';
import { BlockElementRenderer } from './BlockElementRenderer';

export type BlockElementRenderers<OutputElement> = {
  [Type in BlockElementType]: BlockElementRenderer<
    OutputElement,
    BlockElementMap[Type]
  >;
};
