import {
  BlockContext,
  ElementType,
  IActionsBlock,
  IButtonElement,
  IContextBlock,
  IDatePickerElement,
  IDividerBlock,
  IElement,
  IImageBlock,
  IInputBlock,
  IMultiStaticSelectElement,
  IOverflowElement,
  ISectionBlock,
  IStaticSelectElement,
} from '../blocks';
import { createElementRenderer, createSurfaceRenderer } from '../functions';
import { IParser } from '../parsers/IParser';
import { ElementRenderer } from '../renderers/ElementRenderer';
import { UiKitParserText } from './text';

export abstract class UiKitParserBanner
  extends UiKitParserText
  implements IParser<unknown> {
  divider: ElementRenderer<unknown, IDividerBlock>;

  section: ElementRenderer<unknown, ISectionBlock>;

  image: ElementRenderer<unknown, IImageBlock>;

  actions: ElementRenderer<unknown, IActionsBlock>;

  context: ElementRenderer<unknown, IContextBlock>;

  button: (
    element: IButtonElement,
    context: BlockContext,
    index: number
  ) => unknown;

  datePicker: (
    element: IDatePickerElement,
    context: BlockContext,
    index: number
  ) => unknown;

  staticSelect: (
    element: IStaticSelectElement,
    context: BlockContext,
    index: number
  ) => unknown;

  multiStaticSelect: (
    element: IMultiStaticSelectElement,
    context: BlockContext,
    index: number
  ) => unknown;

  overflow: (
    element: IOverflowElement,
    context: BlockContext,
    index: number
  ) => unknown;

  input: ElementRenderer<unknown, IInputBlock>;

  plainInput: ElementRenderer<unknown, IElement>;

  renderAccessories = createElementRenderer(this, [
    ElementType.BUTTON,
    ElementType.IMAGE,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.USER_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.OVERFLOW,
  ]);

  renderActions = createElementRenderer(this, [
    ElementType.BUTTON,
    ElementType.STATIC_SELECT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
  ]);

  renderContext = createElementRenderer(this, [
    ElementType.IMAGE,
    ElementType.PLAIN_TEXT,
    ElementType.MARKDOWN,
  ]);

  renderInputs = createElementRenderer(this, [
    ElementType.STATIC_SELECT,
    ElementType.PLAIN_TEXT_INPUT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.TOGGLE_BUTTON_GROUP,
  ]);
}

export const uiKitBanner = createSurfaceRenderer<unknown>([
  ElementType.DIVIDER,
  ElementType.SECTION,
  ElementType.IMAGE,
  ElementType.ACTIONS,
  ElementType.CONTEXT,
  ElementType.INPUT,
]);
