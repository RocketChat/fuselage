import { ActionsBlock } from '../../blocks/layout/ActionsBlock';
import { ContextBlock } from '../../blocks/layout/ContextBlock';
import { DividerBlock } from '../../blocks/layout/DividerBlock';
import { ImageBlock } from '../../blocks/layout/ImageBlock';
import { SectionBlock } from '../../blocks/layout/SectionBlock';
import { SurfaceRenderer, SurfaceRendererPayload } from '../SurfaceRenderer';

export abstract class UiKitParserMessage<OutputElement> extends SurfaceRenderer<
  OutputElement,
  ActionsBlock | ContextBlock | DividerBlock | ImageBlock | SectionBlock
> {
  public constructor() {
    super(['actions', 'context', 'divider', 'image', 'section']);
  }
}

export type MessageSurfaceLayout = SurfaceRendererPayload<
  UiKitParserMessage<any>
>;
