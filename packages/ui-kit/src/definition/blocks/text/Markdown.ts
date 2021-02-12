import { TextObjectType } from '../../../enums/TextObjectType';

export type Markdown = {
  type: `${TextObjectType.MARKDOWN}`;
  text: string;
  verbatim?: boolean;
};
