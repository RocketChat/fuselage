import type { ComponentProps } from 'react';

import { Button } from '../../Button';

type TableSelectionButtonProps = ComponentProps<typeof Button>;

export const TableSelectionButton = (props: TableSelectionButtonProps) => (
  <Button small flexShrink={0} {...props} />
);
