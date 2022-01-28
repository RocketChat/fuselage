import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

type TableSelectionButtonProps = ComponentProps<typeof Box>;

export const TableSelectionButton: FC<TableSelectionButtonProps> = (props) => (
  <Button small primary flexShrink={0} {...props} />
);
