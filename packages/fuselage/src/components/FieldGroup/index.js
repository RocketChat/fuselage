import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import { StyledFieldGroup } from './styles';

export const FieldGroup = React.forwardRef(function FieldGroup({
  className,
  invisible,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-field-group', {}, className);
  const theme = useTheme();
  return <StyledFieldGroup className={compoundClassName} ref={ref} role='group' theme={theme} {...props} />;
});

FieldGroup.displayName = 'FieldGroup';

FieldGroup.propTypes = {
  invisible: PropTypes.bool,
};
