import { ElementType } from './ElementType';

export type PlainText = {
  type: ElementType.PLAIN_TEXT;
  text: string;
  emoji?: boolean;
};
