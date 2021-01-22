import {
  BlockContext,
  ElementType,
  IMarkdown,
  IPlainText,
  TextObject,
} from '../blocks';
import { createSurfaceRenderer } from '../functions';
import { IParser } from '../parsers/IParser';
import { ElementRenderer } from '../renderers/ElementRenderer';

export const uiKitText = createSurfaceRenderer<unknown>([
  ElementType.PLAIN_TEXT,
  ElementType.MARKDOWN,
]);

export abstract class UiKitParserText implements IParser<unknown> {
  plainText: ElementRenderer<unknown, IPlainText>;

  mrkdwn: ElementRenderer<unknown, IMarkdown>;

  text = (text: TextObject, context: BlockContext, index: number): unknown => {
    if (text.type === ElementType.PLAIN_TEXT) {
      return this.plainText(text as IPlainText, context, index);
    }

    if (text.type === ElementType.MARKDOWN) {
      return this.mrkdwn(text as IMarkdown, context, index);
    }

    return null;
  };
}
