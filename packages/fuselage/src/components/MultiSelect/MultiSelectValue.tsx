import type { ReactNode, SyntheticEvent } from 'react';
import React from 'react';

import Chip from '../Chip';

type MultiSelectValueProps = {
  label: ReactNode;
  accessibleLabel: string;
  onClick?: () => void;
};

const MultiSelectValue = ({
  label,
  accessibleLabel,
  onClick,
}: MultiSelectValueProps) => (
  <Chip
    role='option'
    aria-label={accessibleLabel}
    tabIndex={-1}
    margin={4}
    onMouseDown={(e: SyntheticEvent) => {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      onClick?.();
    }}
  >
    {label}
  </Chip>
);

export default MultiSelectValue;
