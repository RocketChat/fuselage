import { TextObjectType } from './TextObjectType';

export interface ITextObject {
  type: TextObjectType;
  text: string;
  emoji?: boolean;
}
