import {
  TextObject,
  PlainText,
  Markdown,
  DividerBlock,
  SectionBlock,
  ImageBlock,
  ImageElement,
  ActionsBlock,
  ContextBlock,
  ButtonElement,
  DatePickerElement,
  StaticSelectElement,
  MultiStaticSelectElement,
  OverflowElement,
  InputBlock,
  PlainTextInputElement,
  LinearScaleElement,
} from '../blocks';
import { BlockRenderer } from './BlockRenderer';
import { ElementRenderer } from './ElementRenderer';
import { ElementSetRenderer } from './ElementSetRenderer';

export interface IParser<T> {
  text: ElementRenderer<T, TextObject>;
  plainText: ElementRenderer<T, PlainText>;
  mrkdwn: ElementRenderer<T, Markdown>;

  divider?: BlockRenderer<T, DividerBlock>;
  section?: BlockRenderer<T, SectionBlock>;
  image?: BlockRenderer<T, ImageBlock> | ElementRenderer<T, ImageElement>;
  actions?: BlockRenderer<T, ActionsBlock>;
  context?: BlockRenderer<T, ContextBlock>;
  input?: BlockRenderer<T, InputBlock>;

  button?: ElementRenderer<T, ButtonElement>;
  datePicker?: ElementRenderer<T, DatePickerElement>;
  staticSelect?: ElementRenderer<T, StaticSelectElement>;
  multiStaticSelect?: ElementRenderer<T, MultiStaticSelectElement>;
  overflow?: ElementRenderer<T, OverflowElement>;
  plainInput?: ElementRenderer<T, PlainTextInputElement>;
  linearScale?: ElementRenderer<T, LinearScaleElement>;

  renderAccessories?: ElementSetRenderer<
    T,
    Exclude<SectionBlock['accessory'], undefined>
  >;
  renderActions?: ElementSetRenderer<T, ActionsBlock['elements'][number]>;
  renderContext?: ElementSetRenderer<T, ContextBlock['elements'][number]>;
  renderInputs?: ElementSetRenderer<T, InputBlock['element']>;
}
