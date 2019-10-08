import React from 'react';

import { useClassName } from '../../hooks';
import { Box } from '../Box';

/**
 * A container for grouping fields that semantically share a common data context.
 */
export const FieldGroup = React.forwardRef(function FieldGroup({
  className,
  invisible,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-field-group', {}, className);

  return <Box className={compoundClassName} is='fieldset' ref={ref} role='group' {...props} />;
});

FieldGroup.displayName = 'FieldGroup';
