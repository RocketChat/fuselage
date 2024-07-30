import React from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';
import type { BoxProps } from '../Box';
import Box from '../Box';

/** @public */
export type FieldGroupProps = BoxProps;

/** @public */
const FieldGroup = ({ children, ...props }: FieldGroupProps) => (
  <Box is='fieldset' rcx-field-group role='group' {...props}>
    {patchChildren(
      children,
      (childProps: { className: string | string[] }) => ({
        className: appendClassName(
          childProps.className,
          'rcx-field-group__item'
        ),
      })
    )}
  </Box>
);

export default FieldGroup;
