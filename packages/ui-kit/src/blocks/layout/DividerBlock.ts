import { Layout } from '../Layout';
import { LayoutBlockType } from '../LayoutBlockType';

export type DividerBlock = Layout<{
  type: `${LayoutBlockType.DIVIDER}`;
}>;
