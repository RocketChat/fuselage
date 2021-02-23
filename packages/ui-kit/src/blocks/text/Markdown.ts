import { TextObjectType } from '../TextObjectType';

export type Markdown = {
  type: `${TextObjectType.MARKDOWN}`;
  text: string;
  verbatim?: boolean;
};
