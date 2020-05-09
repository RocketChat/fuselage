import React from 'react';

import { Box } from '../Box';
import { patchChildren } from '../../helpers/patchChildren';

export function FieldGroup({
  children,
  ...props
}) {
  return <Box is='fieldset' rcx-field-group role='group' {...props}>
    {patchChildren(children, {
      className: 'rcx-field-group__item',
    })}
  </Box>;
}
