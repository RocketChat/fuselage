import { LayoutBlockType } from '../enums/LayoutBlockType';
import { createSurfaceRenderer } from '../rendering';
import { BaseSurfaceRenderer } from './BaseSurfaceRenderer';

export abstract class UiKitParserModal<
  OutputElement
> extends BaseSurfaceRenderer<OutputElement> {
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

export const uiKitModal = createSurfaceRenderer();
