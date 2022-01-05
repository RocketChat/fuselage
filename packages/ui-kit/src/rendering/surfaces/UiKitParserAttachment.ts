import { ActionsBlock } from '../../blocks/layout/ActionsBlock';
import { ContextBlock } from '../../blocks/layout/ContextBlock';
import { DividerBlock } from '../../blocks/layout/DividerBlock';
import { ImageBlock } from '../../blocks/layout/ImageBlock';
import { SectionBlock } from '../../blocks/layout/SectionBlock';
import { SurfaceRenderer } from '../SurfaceRenderer';

type AttachmentSurfaceLayoutBlock =
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | SectionBlock;

export abstract class UiKitParserAttachment<T> extends SurfaceRenderer<
  T,
  AttachmentSurfaceLayoutBlock
> {
  public constructor() {
    super(['actions', 'context', 'divider', 'image', 'section']);
  }
}

export type AttachmentSurfaceLayout = AttachmentSurfaceLayoutBlock[];
