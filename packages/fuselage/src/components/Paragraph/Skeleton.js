import PropTypes from 'prop-types';
import React from 'react';

import { Paragraph } from '.';
import { Text } from '../Text';


export function Skeleton({ animated, ...props }) {
  return <Paragraph {...props}>
    <Text.Skeleton animated={animated} />
    <Text.Skeleton animated={animated} />
    <Text.Skeleton animated={animated} width='4/5' />
  </Paragraph>;
}

Skeleton.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
  /** The heading level, from 1 to 6 (`h1` to `h6`) */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
