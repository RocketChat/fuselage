import {
  IDividerBlock,
  ISectionBlock,
  IImageBlock,
  IActionsBlock,
  IContextBlock,
  IButtonElement,
  IImageElement,
  IDatePickerElement,
  IStaticSelectElement,
  IMultiStaticSelectElement,
  IOverflowElement,
  SectionAccessoryElement,
  ActionElement,
  ContextElement,
} from '../blocks';
import { BlockRenderer } from '../renderers/BlockRenderer';
import { ElementRenderer } from '../renderers/ElementRenderer';
import { ElementSetRenderer } from '../renderers/ElementSetRenderer';
import { IParser } from './IParser';

export interface IParserMessage<T> extends IParser<T> {
  divider: BlockRenderer<T, IDividerBlock>;
  section: BlockRenderer<T, ISectionBlock>;
  image: BlockRenderer<T, IImageBlock> | ElementRenderer<T, IImageElement>;
  actions: BlockRenderer<T, IActionsBlock>;
  context: BlockRenderer<T, IContextBlock>;

  button: ElementRenderer<T, IButtonElement>;
  datePicker: ElementRenderer<T, IDatePickerElement>;
  staticSelect: ElementRenderer<T, IStaticSelectElement>;
  multiStaticSelect: ElementRenderer<T, IMultiStaticSelectElement>;
  overflow: ElementRenderer<T, IOverflowElement>;

  renderAccessories: ElementSetRenderer<T, SectionAccessoryElement>;
  renderActions: ElementSetRenderer<T, ActionElement>;
  renderContext: ElementSetRenderer<T, ContextElement>;
}
