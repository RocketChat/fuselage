import { LayoutBlockMap } from '../blocks/LayoutBlock';
import { LayoutBlockType } from '../blocks/LayoutBlockType';
import { LayoutBlockRenderer } from './LayoutBlockRenderer';

export type LayoutBlockRenderers<OutputElement> = {
  [Type in Exclude<
    LayoutBlockType,
    LayoutBlockType.CONDITIONAL
  >]: LayoutBlockRenderer<OutputElement, LayoutBlockMap[Type]>;
};
