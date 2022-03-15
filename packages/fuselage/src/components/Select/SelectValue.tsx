import React from 'react';

import { Box } from '../Box';
import type { SelectValueParams } from './SelectValueParams';

type SelectValueProps<TValue> = SelectValueParams<TValue>;

const SelectValue = <TValue,>(props: SelectValueProps<TValue>) => {
  if ('value' in props) {
    const { label } = props;

    return (
      <Box
        is='span'
        rcx-select__item
        flexGrow={1}
        marginInline={4}
        fontScale='p2'
        color='default'
      >
        {label}
      </Box>
    );
  }

  const { placeholder } = props;

  return (
    <Box
      is='span'
      rcx-select__item
      flexGrow={1}
      marginInline={4}
      fontScale='p2'
      color='hint'
    >
      {placeholder}
    </Box>
  );
};

export default SelectValue;
