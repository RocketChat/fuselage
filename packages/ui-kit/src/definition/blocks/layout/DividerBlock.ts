import { LayoutBlockType } from '../../../enums/LayoutBlockType';
import { Layout } from './Layout';

export type DividerBlock = Layout<{
  type: `${LayoutBlockType.DIVIDER}`;
}>;
