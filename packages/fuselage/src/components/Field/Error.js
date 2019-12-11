import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export function FieldError({
  children,
  ...props
}) {
  return <Box is='span' componentClassName='rcx-field__error' {...props}>
    <Box is='span' children={children} textColor='danger' textStyle='paragraph' />
  </Box>;
}

FieldError.displayName = 'Field.Error';

FieldError.propTypes = {
  children: PropTypes.node.isRequired,
};
