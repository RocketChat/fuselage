import type { ComponentProps } from 'react';

import { appendClassName } from '../../helpers/appendClassName.js';
import { patchChildren } from '../../helpers/patchChildren.js';
import Box from '../Box/index.js';

type FieldGroupProps = ComponentProps<typeof Box>;

/**
 * A container for grouping fields that semantically share a common data context.
 */
export const FieldGroup = ({ children, ...props }: FieldGroupProps) => (
  <Box is='fieldset' rcx-field-group role='group' {...props}>
    {patchChildren(
      children,
      (childProps: { className: string | string[] }) => ({
        className: appendClassName(
          childProps.className,
          'rcx-field-group__item',
        ),
      }),
    )}
  </Box>
);
