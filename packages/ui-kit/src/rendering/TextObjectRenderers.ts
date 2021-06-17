import { TextObjectMap } from '../blocks/TextObject';
import { TextObjectType } from '../blocks/TextObjectType';
import { TextObjectRenderer } from './TextObjectRenderer';

export type TextObjectRenderers<OutputElement> = {
  [Type in TextObjectType]: TextObjectRenderer<
    OutputElement,
    TextObjectMap[Type]
  >;
};
