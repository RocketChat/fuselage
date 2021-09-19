import { DatePickerElement } from '../blocks/elements/DatePickerElement';
import { LinearScaleElement } from '../blocks/elements/LinearScaleElement';
import { MultiStaticSelectElement } from '../blocks/elements/MultiStaticSelectElement';
import { PlainTextInputElement } from '../blocks/elements/PlainTextInputElement';
import { StaticSelectElement } from '../blocks/elements/StaticSelectElement';
import { PlainText } from '../blocks/text/PlainText';
import { BlockElementRenderer } from './BlockElementRenderer';
import { BlockRenderers } from './BlockRenderers';
import { TextObjectRenderer } from './TextObjectRenderer';

export interface ISurfaceRenderer<T> extends BlockRenderers<T> {
  /** @deprecated */
  plainText: TextObjectRenderer<T, PlainText>;

  /** @deprecated */
  text: TextObjectRenderer<T>;

  /** @deprecated */
  datePicker?: BlockElementRenderer<T, DatePickerElement>;

  /** @deprecated */
  staticSelect?: BlockElementRenderer<T, StaticSelectElement>;

  /** @deprecated */
  multiStaticSelect?: BlockElementRenderer<T, MultiStaticSelectElement>;

  /** @deprecated */
  plainInput?: BlockElementRenderer<T, PlainTextInputElement>;

  /** @deprecated */
  linearScale?: BlockElementRenderer<T, LinearScaleElement>;
}
