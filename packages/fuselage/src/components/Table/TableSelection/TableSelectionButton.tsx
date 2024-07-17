import type { ComponentProps } from 'react';
import React from 'react';

import type Box from '../../Box';
import { Button } from '../../Button';

type TableSelectionButtonProps = ComponentProps<typeof Box>;

export const TableSelectionButton = (props: TableSelectionButtonProps) => (
  <Button small flexShrink={0} {...props} />
);
