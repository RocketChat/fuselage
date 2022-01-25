import { BlockElement } from '../blocks/BlockElement';
import { RenderableLayoutBlock } from '../blocks/RenderableLayoutBlock';
import { TextObject } from '../blocks/TextObject';
import { DatePickerElement } from '../blocks/elements/DatePickerElement';
import { LinearScaleElement } from '../blocks/elements/LinearScaleElement';
import { MultiStaticSelectElement } from '../blocks/elements/MultiStaticSelectElement';
import { PlainTextInputElement } from '../blocks/elements/PlainTextInputElement';
import { StaticSelectElement } from '../blocks/elements/StaticSelectElement';
import { PlainText } from '../blocks/text/PlainText';
import { BlockElementRenderer } from './BlockElementRenderer';
import { LayoutBlockRenderer } from './LayoutBlockRenderer';
import { TextObjectRenderer } from './TextObjectRenderer';

export type BlockRenderers<T> = {
  [B in RenderableLayoutBlock as B['type']]?: LayoutBlockRenderer<T, B>;
} & {
  [B in TextObject as B['type']]: TextObjectRenderer<T, B>;
} & {
  [B in BlockElement as B['type']]?: BlockElementRenderer<T, B>;
} & {
  /** @deprecated */
  plainText?: TextObjectRenderer<T, PlainText>;

  /** @deprecated */
  text?: TextObjectRenderer<T>;

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
};
