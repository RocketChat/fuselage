import { ElementType } from './ElementType';

export type Markdown = {
  type: ElementType.MARKDOWN;
  text: string;
  verbatim?: boolean;
};
