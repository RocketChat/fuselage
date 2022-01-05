import { Conditions } from '../../rendering/Conditions';
import { LayoutBlockish } from '../LayoutBlockish';
import { RenderableLayoutBlock } from '../RenderableLayoutBlock';

export type ConditionalBlock = LayoutBlockish<{
  type: 'conditional';
  when?: {
    [K in keyof Conditions]: readonly Conditions[K][];
  };
  render: readonly RenderableLayoutBlock[];
}>;
