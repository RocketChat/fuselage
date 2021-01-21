import {
  TextObject,
  IPlainText,
  IMarkdown,
  IDividerBlock,
  ISectionBlock,
  IImageBlock,
  IImageElement,
  IActionsBlock,
  IContextBlock,
  IButtonElement,
  IDatePickerElement,
  IStaticSelectElement,
  IMultiStaticSelectElement,
  IOverflowElement,
  SectionAccessoryElement,
  ActionElement,
  ContextElement,
  IInputBlock,
  IPlainTextInput,
  InputElement,
} from '../blocks';
import { BlockRenderer } from '../renderers/BlockRenderer';
import { ElementRenderer } from '../renderers/ElementRenderer';
import { ElementSetRenderer } from '../renderers/ElementSetRenderer';

export interface IParser<T> {
  text: ElementRenderer<T, TextObject>;
  plainText: ElementRenderer<T, IPlainText>;
  mrkdwn: ElementRenderer<T, IMarkdown>;

  divider?: BlockRenderer<T, IDividerBlock>;
  section?: BlockRenderer<T, ISectionBlock>;
  image?: BlockRenderer<T, IImageBlock> | ElementRenderer<T, IImageElement>;
  actions?: BlockRenderer<T, IActionsBlock>;
  context?: BlockRenderer<T, IContextBlock>;
  input?: BlockRenderer<T, IInputBlock>;

  button?: ElementRenderer<T, IButtonElement>;
  datePicker?: ElementRenderer<T, IDatePickerElement>;
  staticSelect?: ElementRenderer<T, IStaticSelectElement>;
  multiStaticSelect?: ElementRenderer<T, IMultiStaticSelectElement>;
  overflow?: ElementRenderer<T, IOverflowElement>;
  plainInput?: ElementRenderer<T, IPlainTextInput>;

  renderAccessories?: ElementSetRenderer<T, SectionAccessoryElement>;
  renderActions?: ElementSetRenderer<T, ActionElement>;
  renderContext?: ElementSetRenderer<T, ContextElement>;
  renderInputs?: ElementSetRenderer<T, InputElement>;
}
