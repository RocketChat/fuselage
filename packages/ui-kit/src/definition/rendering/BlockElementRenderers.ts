import { BlockElementType } from '../../enums';
import { BlockElementMap } from '../blocks/element/BlockElement';
import { BlockElementRenderer } from './BlockElementRenderer';

export type BlockElementRenderers<OutputElement> = {
  [Type in BlockElementType]: BlockElementRenderer<
    OutputElement,
    BlockElementMap[Type]
  >;
};
