import {
  BlockContext,
  ElementType,
  IMarkdown,
  IPlainText,
  TextObject,
} from '../definition/blocks';
import { ElementRenderer } from '../definition/rendering/ElementRenderer';
import { IParser } from '../definition/rendering/IParser';
import { createSurfaceRenderer } from '../functions';

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
