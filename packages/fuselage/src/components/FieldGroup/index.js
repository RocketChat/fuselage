import React from 'react';

import { mergeClassNames } from '../../helpers/mergeClassNames';
import { patchChildren } from '../../helpers/patchChildren';
import { Box } from '../Box';

export function FieldGroup({ children, ...props }) {
  return <Box is='fieldset' rcx-field-group role='group' {...props}>
    {patchChildren(children, (childProps) => ({
      className: mergeClassNames([
        ...Array.isArray(childProps.className) ? childProps.className : [childProps.className],
        'rcx-field-group__item',
      ]),
    }))}
  </Box>;
}
