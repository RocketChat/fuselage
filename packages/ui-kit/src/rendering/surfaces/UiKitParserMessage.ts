import { LayoutBlockType } from '../../blocks/LayoutBlockType';
import { SurfaceRenderer } from '../SurfaceRenderer';
import { GenericSurfaceLayout } from './GenericSurfaceLayout';

type AllowedLayoutsMessage =
  | LayoutBlockType.ACTIONS
  | LayoutBlockType.CONTEXT
  | LayoutBlockType.DIVIDER
  | LayoutBlockType.IMAGE
  | LayoutBlockType.SECTION;

export abstract class UiKitParserMessage<OutputElement> extends SurfaceRenderer<
  OutputElement,
  AllowedLayoutsMessage
> {
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

export type MessageSurfaceLayout = GenericSurfaceLayout<AllowedLayoutsMessage>;
