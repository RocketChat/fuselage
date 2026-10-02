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
  // The surrounding `Margins` patches spacing into this component's className,
  // so the remaining props have to reach the chip for it to be spaced.
  ...props
}: SelectedOptionsProps) {
  return (
    <Chip {...props} onDismiss={onMouseDown}>
      {children}
    </Chip>
  );
});
