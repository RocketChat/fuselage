import { TextObjectType } from '../../enums';
import { TextObjectMap } from '../blocks/text/TextObject';
import { TextObjectRenderer } from './TextObjectRenderer';

export type TextObjectRenderers<OutputElement> = {
  [Type in TextObjectType]: TextObjectRenderer<
    OutputElement,
    TextObjectMap[Type]
  >;
};
