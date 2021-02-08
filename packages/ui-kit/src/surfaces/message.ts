import {
  ActionsBlock,
  BlockContext,
  ElementType,
  ContextBlock,
  Markdown,
  PlainText,
  SectionBlock,
  TextObject,
} from '../definition/blocks';
import { ElementSetRenderer } from '../definition/rendering/ElementSetRenderer';
import { IParser } from '../definition/rendering/IParser';
import { createElementRenderer, createSurfaceRenderer } from '../functions';

export abstract class UiKitParserMessage<Element> implements IParser<Element> {
  plainText(
    _element: PlainText,
    _context: BlockContext,
    _index: number
  ): Element | null {
    return null;
  }

  mrkdwn(
    _element: Markdown,
    _context: BlockContext,
    _index: number
  ): Element | null {
    return null;
  }

  text(text: TextObject, context: BlockContext, index: number): Element | null {
    if (text.type === ElementType.PLAIN_TEXT) {
      return this.plainText(text as PlainText, context, index);
    }

    if (text.type === ElementType.MARKDOWN) {
      return this.mrkdwn(text as Markdown, context, index);
    }

    return null;
  }

  renderAccessories: ElementSetRenderer<
    Element,
    Exclude<SectionBlock['accessory'], undefined>
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
    ActionsBlock['elements'][number]
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
    ContextBlock['elements'][number]
  > = createElementRenderer(this, [
    ElementType.IMAGE,
    ElementType.PLAIN_TEXT,
    ElementType.MARKDOWN,
  ]);
}

export const uiKitMessage = createSurfaceRenderer<unknown>([
  ElementType.DIVIDER,
  ElementType.SECTION,
  ElementType.IMAGE,
  ElementType.ACTIONS,
  ElementType.CONTEXT,
]);
