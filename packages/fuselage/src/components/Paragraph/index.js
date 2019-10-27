import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import { Text } from '../Text';
import { Skeleton } from './Skeleton';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-paragraph', Text);

export const Paragraph = React.forwardRef(function Paragraph(props, ref) {
  return <Container is='p' paragraph ref={ref} {...props} />;
});

Paragraph.displayName = 'Paragraph';

Paragraph.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

Paragraph.Skeleton = Skeleton;
