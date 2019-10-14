import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import { Text } from '../Text';
import { StyledInputBoxSkeleton } from './styles';

export function Skeleton({ animated }) {
  const compoundClassName = useClassName('rcx-input-box__skeleton');
  const theme = useTheme();
  return <StyledInputBoxSkeleton className={compoundClassName} theme={theme}>
    <Text.Skeleton animated={animated} />
  </StyledInputBoxSkeleton>;
}

Skeleton.defaultProps = {
  animated: false,
};

Skeleton.displayName = 'InputBox.Skeleton';

Skeleton.propTypes = {
  animated: PropTypes.bool,
};
