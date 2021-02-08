import { PlainText } from './text/PlainText';
import { TextObject } from './text/TextObject';

export type Option = {
  text: TextObject;
  value: string;
  description?: PlainText;
  url?: string;
};
