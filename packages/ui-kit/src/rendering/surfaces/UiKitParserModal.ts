import { LayoutBlockType } from '../../blocks/LayoutBlockType';
import { BaseSurfaceRenderer } from '../BaseSurfaceRenderer';
import { GenericSurfaceLayout } from './GenericSurfaceLayout';

type AllowedLayoutsModal =
  | LayoutBlockType.ACTIONS
  | LayoutBlockType.CONTEXT
  | LayoutBlockType.DIVIDER
  | LayoutBlockType.IMAGE
  | LayoutBlockType.INPUT
  | LayoutBlockType.SECTION;

export abstract class UiKitParserModal<
  OutputElement
> extends BaseSurfaceRenderer<OutputElement, AllowedLayoutsModal> {
  public constructor() {
    super([
      LayoutBlockType.ACTIONS,
      LayoutBlockType.CONTEXT,
      LayoutBlockType.DIVIDER,
      LayoutBlockType.IMAGE,
      LayoutBlockType.INPUT,
      LayoutBlockType.SECTION,
    ]);
  }
}

export type ModalSurfaceLayout = GenericSurfaceLayout<AllowedLayoutsModal>;
