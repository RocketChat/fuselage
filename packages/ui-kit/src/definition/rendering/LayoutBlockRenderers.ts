import { LayoutBlockType } from '../../enums/LayoutBlockType';
import { LayoutBlockMap } from '../blocks/layout/LayoutBlock';
import { LayoutBlockRenderer } from './LayoutBlockRenderer';

export type LayoutBlockRenderers<OutputElement> = {
  [Type in Exclude<
    LayoutBlockType,
    LayoutBlockType.CONDITIONAL
  >]: LayoutBlockRenderer<OutputElement, LayoutBlockMap[Type]>;
};
