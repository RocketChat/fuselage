import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Icon } from '../Icon';

const Container = createStyledComponent('rcx-callout', 'section');
const Wrapper = createStyledComponent('rcx-callout__wrapper');
const Title = createStyledComponent('rcx-callout__title', 'h1');
const ChildrenWrapper = createStyledComponent('rcx-callout__children', 'div');

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

  return <Container mod-type={type} ref={ref} {...props}>
    <Icon name={iconName} size={20} />
    <Wrapper>
      {title && <Title>{title}</Title>}
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
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
  title: PropTypes.node,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
};
