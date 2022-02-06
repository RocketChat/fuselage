import React, { ComponentProps } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

type TableSelectionButtonProps = ComponentProps<typeof Box>;

export const TableSelectionButton = (props: TableSelectionButtonProps) => (
  <Button small primary flexShrink={0} {...props} />
);
