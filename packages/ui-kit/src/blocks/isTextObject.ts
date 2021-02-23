import { Block } from './Block';
import { TextObject } from './TextObject';
import { TextObjectType } from './TextObjectType';

export const isTextObject = (block: Block): block is TextObject => {
  return (Object.values(TextObjectType) as string[]).includes(block.type);
};
