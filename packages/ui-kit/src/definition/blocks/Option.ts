import { PlainText } from './PlainText';
import { TextObject } from './TextObject';

export type Option = {
  text: TextObject;
  value: string;
  description?: PlainText;
  url?: string;
};
