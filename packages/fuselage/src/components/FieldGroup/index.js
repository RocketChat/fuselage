import React, { useMemo } from 'react';

import { Box } from '../Box';

export function FieldGroup({
  children,
  ...props
}) {
  const wrappedChildren = useMemo(() =>
    React.Children.map(children, (child, index) =>
      <Box key={index} componentClassName='rcx-field-group__item' children={child} />), [children]);

  return <Box componentClassName='rcx-field-group' is='fieldset' children={wrappedChildren} role='group' {...props} />;
}
