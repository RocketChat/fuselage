import React, { useMemo } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box } from '../Box';
import { appendClassName } from '../../helpers/appendClassName';

export function FieldGroup({
  children,
  ...props
}) {
  return <Box is='fieldset' rcx-field-group role='group' {...props}>
    {useMemo(() =>
      flattenChildren(children).map((child) => appendClassName(child, 'rcx-field-group__item')),
    [children])}
  </Box>;
}
