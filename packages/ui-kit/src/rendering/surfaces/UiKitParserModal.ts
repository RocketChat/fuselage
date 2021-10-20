import { ActionsBlock } from '../../blocks/layout/ActionsBlock';
import { ContextBlock } from '../../blocks/layout/ContextBlock';
import { DividerBlock } from '../../blocks/layout/DividerBlock';
import { ImageBlock } from '../../blocks/layout/ImageBlock';
import { InputBlock } from '../../blocks/layout/InputBlock';
import { SectionBlock } from '../../blocks/layout/SectionBlock';
import { SurfaceRenderer } from '../SurfaceRenderer';

type ModalSurfaceLayoutBlock =
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | InputBlock
  | SectionBlock;

export abstract class UiKitParserModal<OutputElement> extends SurfaceRenderer<
  OutputElement,
  ModalSurfaceLayoutBlock
> {
  public constructor() {
    super(['actions', 'context', 'divider', 'image', 'input', 'section']);
  }
}

export type ModalSurfaceLayout = ModalSurfaceLayoutBlock[];
