import type { BlockElement } from '../blocks/BlockElement';
import type { RenderableLayoutBlock } from '../blocks/RenderableLayoutBlock';
import type { TextObject } from '../blocks/TextObject';
import type { DatePickerElement } from '../blocks/elements/DatePickerElement';
import type { LinearScaleElement } from '../blocks/elements/LinearScaleElement';
import type { MultiStaticSelectElement } from '../blocks/elements/MultiStaticSelectElement';
import type { PlainTextInputElement } from '../blocks/elements/PlainTextInputElement';
import type { StaticSelectElement } from '../blocks/elements/StaticSelectElement';
import type { ToggleSwitchElement } from '../blocks/elements/ToggleSwitchElement';
import type { RadioButtonElement } from '../blocks/elements/RadioButtonElement';
import type { CheckboxElement } from '../blocks/elements/CheckboxElement';
import type { PlainText } from '../blocks/text/PlainText';
import type { BlockElementRenderer } from './BlockElementRenderer';
import type { LayoutBlockRenderer } from './LayoutBlockRenderer';
import type { TextObjectRenderer } from './TextObjectRenderer';
import type { CalloutElement } from '../blocks/elements/CalloutElement';
import type { ToastBarElement } from '../blocks/elements/ToastBarElement';
import type { TimePickerElement } from '../blocks/elements/TimePickerElement';

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

  /** @deprecated */
  toggleSwitch?: BlockElementRenderer<T, ToggleSwitchElement>;

  /** @deprecated */
  radioButton?: BlockElementRenderer<T, RadioButtonElement>;

  /** @deprecated */
  checkbox?: BlockElementRenderer<T, CheckboxElement>;

  /** @deprecated */
  callout?: BlockElementRenderer<T, CalloutElement>;

  /** @deprecated */
  toastBar?: BlockElementRenderer<T, ToastBarElement>;

  /** @deprecated */
  timePicker?: BlockElementRenderer<T, TimePickerElement>;
};
