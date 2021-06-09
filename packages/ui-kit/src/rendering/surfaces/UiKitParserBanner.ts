import { LayoutBlockType } from '../../blocks/LayoutBlockType';
import { BaseSurfaceRenderer } from '../BaseSurfaceRenderer';
import { GenericSurfaceLayout } from './GenericSurfaceLayout';

type AllowedLayoutBanner =
  | LayoutBlockType.ACTIONS
  | LayoutBlockType.CONTEXT
  | LayoutBlockType.DIVIDER
  | LayoutBlockType.IMAGE
  | LayoutBlockType.INPUT
  | LayoutBlockType.SECTION;
export abstract class UiKitParserBanner<
  OutputElement
> extends BaseSurfaceRenderer<OutputElement, AllowedLayoutBanner> {
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
