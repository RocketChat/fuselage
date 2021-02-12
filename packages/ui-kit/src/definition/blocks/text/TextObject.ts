import { TextObjectType } from '../../../enums';
import { Markdown } from './Markdown';
import { PlainText } from './PlainText';

export type TextObjectMap = {
  [TextObjectType.PLAIN_TEXT]: PlainText;
  [TextObjectType.MARKDOWN]: Markdown;
};

export type TextObject = TextObjectMap[keyof TextObjectMap];
