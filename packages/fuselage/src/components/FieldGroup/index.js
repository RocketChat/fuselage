import React, { useMemo } from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-field-group', 'fieldset');
const ItemContainer = Box.extend('rcx-field-group__item');

export function FieldGroup({
  children,
  ...props
}) {
  const wrappedChildren = useMemo(() =>
    React.Children.map(children, (child, index) =>
      <ItemContainer key={index} children={child} />), [children]);

  return <Container children={wrappedChildren} role='group' {...props} />;
}

FieldGroup.displayName = 'FieldGroup';
