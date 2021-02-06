import {
  ElementType,
  IPlainText,
  IMarkdown,
  TextObject,
  BlockContext,
  SectionAccessoryElement,
  ActionElement,
  ContextElement,
  InputElement,
} from '../definition/blocks';
import { ElementSetRenderer } from '../definition/rendering/ElementSetRenderer';
import { IParser } from '../definition/rendering/IParser';
import { createElementRenderer, createSurfaceRenderer } from '../functions';

export abstract class UiKitParserModal<Element> implements IParser<Element> {
  plainText(
    _element: IPlainText,
    _context: BlockContext,
    _index: number
  ): Element | null {
    return null;
  }

  mrkdwn(
    _element: IMarkdown,
    _context: BlockContext,
    _index: number
  ): Element | null {
    return null;
  }

  text(text: TextObject, context: BlockContext, index: number): Element | null {
    if (text.type === ElementType.PLAIN_TEXT) {
      return this.plainText(text as IPlainText, context, index);
    }

    if (text.type === ElementType.MARKDOWN) {
      return this.mrkdwn(text as IMarkdown, context, index);
    }

    return null;
  }

  renderAccessories: ElementSetRenderer<
    Element,
    SectionAccessoryElement
  > = createElementRenderer(this, [
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

  renderActions: ElementSetRenderer<
    Element,
    ActionElement
  > = createElementRenderer(this, [
    ElementType.BUTTON,
    ElementType.STATIC_SELECT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.LINEAR_SCALE,
  ]);

  renderContext: ElementSetRenderer<
    Element,
    ContextElement
  > = createElementRenderer(this, [
    ElementType.IMAGE,
    ElementType.PLAIN_TEXT,
    ElementType.MARKDOWN,
  ]);

  renderInputs: ElementSetRenderer<
    Element,
    InputElement
  > = createElementRenderer(this, [
    ElementType.STATIC_SELECT,
    ElementType.PLAIN_TEXT_INPUT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.LINEAR_SCALE,
  ]);
}

export const uiKitModal = createSurfaceRenderer<unknown>([
  ElementType.DIVIDER,
  ElementType.SECTION,
  ElementType.IMAGE,
  ElementType.ACTIONS,
  ElementType.CONTEXT,
  ElementType.INPUT,
]);
