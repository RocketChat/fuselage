import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../Icon';
import { StyledCallout, Wrapper, Title, Description } from './styles';

export const Callout = React.forwardRef(function Callout({
  className,
  description,
  title,
  type = 'info',
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-callout', { type }, className),
    wrapper: useClassName('rcx-callout__wrapper'),
    title: useClassName('rcx-callout__title'),
    description: useClassName('rcx-callout__description'),
  };
  const theme = useTheme();

  const iconName = (type === 'info' && 'info-circled')
    || (type === 'success' && 'checkmark-circled')
    || (type === 'warning' && 'warning')
    || (type === 'danger' && 'ban');

  return <StyledCallout className={classNames.container} ref={ref} theme={theme} type={type} {...props}>
    <Icon name={iconName} />
    <Wrapper theme={theme}>
      <Title theme={theme}>{title}</Title>
      {description && <Description theme={theme}>{description}</Description>}
    </Wrapper>
  </StyledCallout>;
});

Callout.defaultProps = {
  type: 'info',
};

Callout.displayName = 'Callout';

Callout.propTypes = {
  description: PropTypes.string,
  invisible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
};
