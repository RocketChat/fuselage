import { LayoutBlockType } from '../../blocks/LayoutBlockType';
import { BaseSurfaceRenderer } from '../BaseSurfaceRenderer';

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
