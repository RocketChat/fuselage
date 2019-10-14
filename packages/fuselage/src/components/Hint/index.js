import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import { StyledHint } from './styles';

export const Hint = React.forwardRef(function Hint({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-hint', {}, className);
  const theme = useTheme();
  return <StyledHint className={compoundClassName} ref={ref} theme={theme} {...props} />;
});

Hint.displayName = 'Hint';

Hint.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  invisible: PropTypes.bool,
};
