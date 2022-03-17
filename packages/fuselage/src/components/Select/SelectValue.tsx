import type { ReactNode } from 'react';
import React from 'react';

import { Box } from '../Box';

type SelectValueProps = {
  label: ReactNode;
  accessibleLabel: string;
};

const SelectValue = ({ label, accessibleLabel }: SelectValueProps) => (
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

export default SelectValue;
