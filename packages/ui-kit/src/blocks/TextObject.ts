import { TextObjectType } from './TextObjectType';
import { Markdown } from './text/Markdown';
import { PlainText } from './text/PlainText';

export type TextObjectMap = {
  [TextObjectType.PLAIN_TEXT]: PlainText;
  [TextObjectType.MARKDOWN]: Markdown;
};

export type TextObject = TextObjectMap[keyof TextObjectMap];
