import { Divider } from '@rocket.chat/fuselage';
import * as UiKit from '@rocket.chat/ui-kit';
import React, { memo, ReactElement } from 'react';

import { BlockProps } from '../utils/BlockProps';

type DividerBlockProps = BlockProps<UiKit.DividerBlock>;

const DividerBlock = ({ className }: DividerBlockProps): ReactElement => (
  <Divider className={className} marginBlock='x24' />
);

export default memo(DividerBlock);
