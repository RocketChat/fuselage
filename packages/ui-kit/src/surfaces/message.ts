import { BaseSurfaceRenderer } from '../BaseSurfaceRenderer';
import { LayoutBlockType } from '../enums/LayoutBlockType';
import { createSurfaceRenderer } from '../rendering';

export abstract class UiKitParserMessage<
  OutputElement
> extends BaseSurfaceRenderer<OutputElement> {
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

export const uiKitMessage = createSurfaceRenderer();
