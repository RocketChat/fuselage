import type { MouseEvent, ReactNode } from 'react';
import { memo } from 'react';

import { Chip } from '../Chip';

type SelectedOptionsProps = {
  children: ReactNode;
  key: string;
  onMouseDown: (e: MouseEvent) => void;
};

export const SelectedOptions = memo(function SelectedOptions({
  children,
  onMouseDown,
}: SelectedOptionsProps) {
  return <Chip onDismiss={onMouseDown}>{children}</Chip>;
});
