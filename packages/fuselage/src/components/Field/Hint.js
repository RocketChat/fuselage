import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

const Container = Box.extend('rcx-field__hint');

export function FieldHint({
  children,
  ...props
}) {
  return <Container {...props}>
    <Text children={children} hintColor paragraph />
  </Container>;
}

FieldHint.displayName = 'Field.Hint';

FieldHint.propTypes = {
  children: PropTypes.node.isRequired,
};
