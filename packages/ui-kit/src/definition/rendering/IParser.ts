import {
  TextObject,
  IPlainText,
  IMarkdown,
  IDividerBlock,
  ISectionBlock,
  IImageBlock,
  ImageElement,
  IActionsBlock,
  IContextBlock,
  ButtonElement,
  DatePickerElement,
  StaticSelectElement,
  MultiStaticSelectElement,
  OverflowElement,
  SectionAccessoryElement,
  ActionElement,
  ContextElement,
  IInputBlock,
  PlainTextInputElement,
  InputElement,
  LinearScaleElement,
} from '../blocks';
import { BlockRenderer } from './BlockRenderer';
import { ElementRenderer } from './ElementRenderer';
import { ElementSetRenderer } from './ElementSetRenderer';

export interface IParser<T> {
  text: ElementRenderer<T, TextObject>;
  plainText: ElementRenderer<T, IPlainText>;
  mrkdwn: ElementRenderer<T, IMarkdown>;

  divider?: BlockRenderer<T, IDividerBlock>;
  section?: BlockRenderer<T, ISectionBlock>;
  image?: BlockRenderer<T, IImageBlock> | ElementRenderer<T, ImageElement>;
  actions?: BlockRenderer<T, IActionsBlock>;
  context?: BlockRenderer<T, IContextBlock>;
  input?: BlockRenderer<T, IInputBlock>;

  button?: ElementRenderer<T, ButtonElement>;
  datePicker?: ElementRenderer<T, DatePickerElement>;
  staticSelect?: ElementRenderer<T, StaticSelectElement>;
  multiStaticSelect?: ElementRenderer<T, MultiStaticSelectElement>;
  overflow?: ElementRenderer<T, OverflowElement>;
  plainInput?: ElementRenderer<T, PlainTextInputElement>;
  linearScale?: ElementRenderer<T, LinearScaleElement>;

  renderAccessories?: ElementSetRenderer<T, SectionAccessoryElement>;
  renderActions?: ElementSetRenderer<T, ActionElement>;
  renderContext?: ElementSetRenderer<T, ContextElement>;
  renderInputs?: ElementSetRenderer<T, InputElement>;
}
