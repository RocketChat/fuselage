import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Icon } from '../Icon';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-callout', 'section');
const Wrapper = createStyledComponent(styles, 'rcx-callout__wrapper');
const Title = createStyledComponent(styles, 'rcx-callout__title', 'h1');

export const Callout = React.forwardRef(function Callout({
  children,
  title,
  type = 'info',
  ...props
}, ref) {
  const iconName = (type === 'info' && 'info-circled')
    || (type === 'success' && 'checkmark-circled')
    || (type === 'warning' && 'warning')
    || (type === 'danger' && 'ban');

  return <Container modifiers={{ type }} ref={ref} {...props}>
    <Icon name={iconName} />
    <Wrapper>
      <Title modifiers={{ hasChildren: !!children }}>{title}</Title>
      {children}
    </Wrapper>
  </Container>;
});

Callout.defaultProps = {
  type: 'info',
};

Callout.displayName = 'Callout';

Callout.propTypes = {
  children: PropTypes.node,
  invisible: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
};

Callout.styled = Container;
