import { IPlainText } from './IPlainText';
import { TextObject } from './TextObject';

export type Option = {
  text: TextObject;
  value: string;
  description?: IPlainText;
  url?: string;
};
