import type { ActionsBlock } from '../../blocks/layout/ActionsBlock';
import type { CalloutBlock } from '../../blocks/layout/CalloutBlock';
import type { ContextBlock } from '../../blocks/layout/ContextBlock';
import type { DividerBlock } from '../../blocks/layout/DividerBlock';
import type { ImageBlock } from '../../blocks/layout/ImageBlock';
import type { InputBlock } from '../../blocks/layout/InputBlock';
import type { SectionBlock } from '../../blocks/layout/SectionBlock';
import type { TabNavigationBlock } from '../../blocks/layout/TabNavigationBlock';
import { SurfaceRenderer } from '../SurfaceRenderer';

type ContextualBarSurfaceLayoutBlock =
  | ActionsBlock
  | ContextBlock
  | DividerBlock
  | ImageBlock
  | InputBlock
  | SectionBlock
  | CalloutBlock
  | TabNavigationBlock;

export abstract class UiKitParserContextualBar<
  OutputElement
> extends SurfaceRenderer<OutputElement, ContextualBarSurfaceLayoutBlock> {
  public constructor() {
    super([
      'actions',
      'context',
      'divider',
      'image',
      'input',
      'section',
      'callout',
      'tab_navigation',
    ]);
  }
}

export type ContextualBarSurfaceLayout = ContextualBarSurfaceLayoutBlock[];
