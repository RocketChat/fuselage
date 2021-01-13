import { TextObject, IPlainText, IMarkdown } from '../blocks';
import { ElementRenderer } from '../renderers/ElementRenderer';

export interface IParser<T> {
  text: ElementRenderer<T, TextObject>;
  plainText: ElementRenderer<T, IPlainText>;
  mrkdwn: ElementRenderer<T, IMarkdown>;
}
