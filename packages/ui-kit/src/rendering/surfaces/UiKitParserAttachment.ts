import { LayoutBlockType } from '../../blocks/LayoutBlockType';
import { SurfaceRenderer } from '../SurfaceRenderer';
import { GenericSurfaceLayout } from './GenericSurfaceLayout';

type AllowedLayoutsAttachment =
  | LayoutBlockType.ACTIONS
  | LayoutBlockType.CONTEXT
  | LayoutBlockType.DIVIDER
  | LayoutBlockType.IMAGE
  | LayoutBlockType.SECTION;

export abstract class UiKitParserAttachment<
  OutputElement
> extends SurfaceRenderer<OutputElement, AllowedLayoutsAttachment> {
  public constructor() {
    super([
      LayoutBlockType.ACTIONS,
      LayoutBlockType.CONTEXT,
      LayoutBlockType.DIVIDER,
      LayoutBlockType.IMAGE,
      LayoutBlockType.SECTION,
    ]);
  }
}

export type AttachmentSurfaceLayout =
  GenericSurfaceLayout<AllowedLayoutsAttachment>;
