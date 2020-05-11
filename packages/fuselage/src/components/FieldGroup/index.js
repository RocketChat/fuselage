import React from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box } from '../Box';

export function FieldGroup({ children, ...props }) {
  return <Box is='fieldset' rcx-field-group role='group' {...props}>
    {flattenChildren(children).map((child) => <Box key={child.key} rcx-field-group__item children={child} />)}
  </Box>;
}
