import { LayoutBlockType } from '../../blocks/LayoutBlockType';
import { SurfaceRenderer } from '../SurfaceRenderer';
import { GenericSurfaceLayout } from './GenericSurfaceLayout';

type AllowedLayoutBanner =
  | LayoutBlockType.ACTIONS
  | LayoutBlockType.CONTEXT
  | LayoutBlockType.DIVIDER
  | LayoutBlockType.IMAGE
  | LayoutBlockType.INPUT
  | LayoutBlockType.SECTION;
export abstract class UiKitParserBanner<OutputElement> extends SurfaceRenderer<
  OutputElement,
  AllowedLayoutBanner
> {
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

export type BannerSurfaceLayout = GenericSurfaceLayout<AllowedLayoutBanner>;
