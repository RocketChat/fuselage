import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { StyledField } from './styles';
import { useTheme } from '../../hooks/useTheme';

export const Field = React.forwardRef(function Field({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-field', {}, className);
  const theme = useTheme();
  return <StyledField className={compoundClassName} ref={ref} theme={theme} {...props} />;
});

Field.displayName = 'Field';

Field.propTypes = {
  invisible: PropTypes.bool,
};

Field.styled = StyledField;
