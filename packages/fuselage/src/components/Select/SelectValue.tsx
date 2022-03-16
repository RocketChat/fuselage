import type { ReactNode } from 'react';
import React from 'react';

import { Box } from '../Box';

type SelectValueProps = {
  label: ReactNode;
  accessibleLabel: string | undefined;
  placeholder: string | undefined;
};

const SelectValue = ({
  label,
  accessibleLabel,
  placeholder,
}: SelectValueProps) => {
  if (label) {
    return (
      <Box
        is='span'
        rcx-select__item
        flexGrow={1}
        marginInline={4}
        fontScale='p2'
        color='default'
        aria-label={accessibleLabel}
      >
        {label}
      </Box>
    );
  }

  return (
    <Box
      is='span'
      rcx-select__item
      flexGrow={1}
      marginInline={4}
      fontScale='p2'
      color='hint'
      aria-hidden
    >
      {placeholder}
    </Box>
  );
};

export default SelectValue;
