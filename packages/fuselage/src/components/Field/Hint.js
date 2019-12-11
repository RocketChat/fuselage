import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export function FieldHint({
  children,
  ...props
}) {
  return <Box componentClassName='rcx-field__hint' {...props}>
    <Box children={children} is='span' textColor='hint' textStyle='paragraph' />
  </Box>;
}

FieldHint.displayName = 'Field.Hint';

FieldHint.propTypes = {
  children: PropTypes.node.isRequired,
};
