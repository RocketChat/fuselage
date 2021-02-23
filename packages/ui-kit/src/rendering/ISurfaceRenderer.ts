import { DatePickerElement } from '../blocks/elements/DatePickerElement';
import { LinearScaleElement } from '../blocks/elements/LinearScaleElement';
import { MultiStaticSelectElement } from '../blocks/elements/MultiStaticSelectElement';
import { PlainTextInputElement } from '../blocks/elements/PlainTextInputElement';
import { StaticSelectElement } from '../blocks/elements/StaticSelectElement';
import { PlainText } from '../blocks/text/PlainText';
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
