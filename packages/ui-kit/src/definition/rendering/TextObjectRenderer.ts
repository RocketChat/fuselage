import { TextObject } from '../..';
import { BlockContext } from '../../enums';

export type TextObjectRenderer<
  OutputElement,
  Block extends TextObject = TextObject
> = (
  textObject: Block,
  context: BlockContext,
  index: number
) => OutputElement | null;
