import { ActionsBlock } from '../../blocks/layout/ActionsBlock';
import { ContextBlock } from '../../blocks/layout/ContextBlock';
import { DividerBlock } from '../../blocks/layout/DividerBlock';
import { ImageBlock } from '../../blocks/layout/ImageBlock';
import { InputBlock } from '../../blocks/layout/InputBlock';
import { SectionBlock } from '../../blocks/layout/SectionBlock';
import { SurfaceRenderer, SurfaceRendererPayload } from '../SurfaceRenderer';

export abstract class UiKitParserBanner<T> extends SurfaceRenderer<
  T,
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | InputBlock
  | SectionBlock
> {
  public constructor() {
    super(['actions', 'context', 'divider', 'image', 'input', 'section']);
  }
}

export type BannerSurfaceLayout = SurfaceRendererPayload<
  UiKitParserBanner<any>
>;
