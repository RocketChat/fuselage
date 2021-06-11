import { TextObject } from './TextObject';
import { PlainText } from './text/PlainText';

export type Option = {
  text: TextObject;
  value: string;
  description?: PlainText;
  url?: string;
};
