import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Text } from '../Text';

const Container = Box.extend('rcx-field__error', 'span');

export function FieldError({
  children,
  ...props
}) {
  return <Container {...props}>
    <Text children={children} dangerColor paragraph />
  </Container>;
}

FieldError.displayName = 'Field.Error';

FieldError.propTypes = {
  children: PropTypes.node.isRequired,
};
