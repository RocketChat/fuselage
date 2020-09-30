import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

const processPercentage = (percentage) => {
  const newPercentage = Math.min(Math.max(0, percentage), 100);
  return newPercentage.toFixed(1);
};

export const ProgressBar = forwardRef(function ProgressBar({
  percentage,
  error,
  ...props
}, ref) {
  return <Box
    ref={ref}
    rcx-progress-bar
    title={error || null}
    {...props}
  >
    <Box rcx-progress-bar__fill
      rcx-progress-bar__fill--type={(error && 'error') || (processPercentage(percentage) >= 100 ? 'success' : 'primary')}
      width={`${ processPercentage(percentage) }%`}
    />
  </Box>;
});

ProgressBar.defaultProps = {
  percentage: 0,
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
  error: PropTypes.string,
};
