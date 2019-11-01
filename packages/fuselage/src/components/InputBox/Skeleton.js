import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import { createStyledComponent } from '../../styles';
import { Text } from '../Text';
import styles from './styles';

const SkeletonContainer = createStyledComponent(styles, 'rcx-skeleton__input', 'span');

export function Skeleton({ animated }) {
  const compoundClassName = useClassName('rcx-input-box__skeleton');
  const theme = useTheme();
  return <SkeletonContainer className={compoundClassName} theme={theme}>
    <Text.Skeleton animated={animated} />
  </SkeletonContainer>;
}

Skeleton.defaultProps = {
  animated: false,
};

Skeleton.displayName = 'InputBox.Skeleton';

Skeleton.propTypes = {
  animated: PropTypes.bool,
};
