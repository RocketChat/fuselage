import React from 'react';

import { patchChildren } from '../../helpers/patchChildren';
import { Box } from '../Box';

export function FieldGroup({ children, ...props }) {
  return <Box is='fieldset' rcx-field-group role='group' {...props}>
    {patchChildren(children, { className: 'rcx-field-group__item' })}
  </Box>;
}
