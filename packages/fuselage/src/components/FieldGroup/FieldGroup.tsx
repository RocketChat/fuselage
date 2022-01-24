import React, { ComponentProps, FC } from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';
import { Box } from '../Box';

type FieldGroupProps = ComponentProps<typeof Box>;

export const FieldGroup: FC<FieldGroupProps> = ({ children, ...props }) => (
  <Box is='fieldset' rcx-field-group role='group' {...props}>
    {patchChildren(children, (childProps: { className: string | string[] }) => {
      console.log('--->', childProps);
      return {
        className: appendClassName(
          childProps.className,
          'rcx-field-group__item'
        ),
      };
    })}
  </Box>
);
