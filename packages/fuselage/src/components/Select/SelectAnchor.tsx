import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import type { SelectAnchorParams } from './SelectAnchorParams';

type SelectAnchorProps = SelectAnchorParams;

const SelectAnchor = forwardRef(function SelectFocus(
  props: SelectAnchorProps,
  ref: Ref<Element>
) {
  return (
    <Box
      ref={ref}
      fontScale='p2m'
      color='hint'
      rcx-select__focus
      is='button'
      type='button'
      {...props}
    />
  );
});

export default SelectAnchor;
