import { ElementType } from './ElementType';
import { IElement } from './IElement';

export interface IMarkdown extends IElement {
  type: ElementType.MARKDOWN;
  text: string;
  verbatim?: boolean;
}
