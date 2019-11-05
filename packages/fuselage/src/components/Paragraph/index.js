import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';
import { Skeleton } from './Skeleton';

const Container = createStyledComponent('rcx-paragraph', 'p');

export const Paragraph = React.forwardRef(function Paragraph({
  children,
  ...props
}, ref) {
  return <Container ref={ref} {...props}>
    <Text paragraph children={children} />
  </Container>;
});

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

Paragraph.Skeleton = Skeleton;
