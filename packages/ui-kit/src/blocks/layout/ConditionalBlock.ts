import { Conditions } from '../../rendering/Conditions';
import { Layout } from '../Layout';
import { LayoutBlock } from '../LayoutBlock';
import { LayoutBlockType } from '../LayoutBlockType';

export type ConditionalBlock = Layout<{
  type: `${LayoutBlockType.CONDITIONAL}`;
  when?: {
    [K in keyof Conditions]: Conditions[K][];
  };
  render: Exclude<LayoutBlock, ConditionalBlock>[];
}>;
