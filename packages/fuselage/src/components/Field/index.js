import { useClassName } from '@rocket.chat/fuselage-hooks';
import React from 'react';

import { Box } from '../Box';

export const Field = React.forwardRef(function Field({
  className,
  invisible,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-field', {}, className);

  return <Box className={compoundClassName} is='div' ref={ref} {...props} />;
});

Field.displayName = 'Field';
