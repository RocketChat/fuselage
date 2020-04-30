import React, { useMemo, cloneElement } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box } from '../Box';
import { mergeProps } from '../../helpers/mergeProps';

export function FieldGroup({
  children,
  ...props
}) {
  return <Box is='fieldset' rcx-field-group role='group' {...props}>
    {useMemo(() => flattenChildren(children).map((child) => cloneElement(child, mergeProps({
      className: 'rcx-field-group__item',
    }))), [children])}
  </Box>;
}
