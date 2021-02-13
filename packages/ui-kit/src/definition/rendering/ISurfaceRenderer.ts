import {
  PlainText,
  DatePickerElement,
  StaticSelectElement,
  MultiStaticSelectElement,
  PlainTextInputElement,
  LinearScaleElement,
} from '../blocks';
import { BlockElementRenderer } from './BlockElementRenderer';
import { BlockRenderers } from './BlockRenderers';
import { TextObjectRenderer } from './TextObjectRenderer';

export interface ISurfaceRenderer<OutputElement>
  extends BlockRenderers<OutputElement> {
  /** @deprecated */
  plainText: TextObjectRenderer<OutputElement, PlainText>;

  /** @deprecated */
  text: TextObjectRenderer<OutputElement>;

  /** @deprecated */
  datePicker?: BlockElementRenderer<OutputElement, DatePickerElement>;

  /** @deprecated */
  staticSelect?: BlockElementRenderer<OutputElement, StaticSelectElement>;

  /** @deprecated */
  multiStaticSelect?: BlockElementRenderer<
    OutputElement,
    MultiStaticSelectElement
  >;

  /** @deprecated */
  plainInput?: BlockElementRenderer<OutputElement, PlainTextInputElement>;

  /** @deprecated */
  linearScale?: BlockElementRenderer<OutputElement, LinearScaleElement>;
}
