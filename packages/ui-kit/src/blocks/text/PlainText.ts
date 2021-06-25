import { TextObjectType } from '../TextObjectType';

export type PlainText = {
  type: `${TextObjectType.PLAIN_TEXT}`;
  text: string;
  emoji?: boolean;
};
