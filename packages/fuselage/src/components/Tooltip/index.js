import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { Box } from '../Box';

const placementMap = {
  t: 'top',
  b: 'bottom',
  l: 'left',
  r: 'right',
  s: 'start',
  e: 'end',
  m: 'middle',
};

export const Tooltip = React.forwardRef(function Tooltip({
  placement,
  ...props
}, ref) {
  const { style: { placement: stylePlacement } = {} } = props;
  if (stylePlacement) {
    const newPlacement = stylePlacement.split('');
    placement = `${ placementMap[newPlacement[0]] }-${ placementMap[newPlacement[1]] }`;
  }

  const [direction, position] = useMemo(() => {
    const [dir, pos] = placement ? placement.split('-') : [false, false];

    if (!dir || dir === 'left' || dir === 'right') {
      return [String(dir), false];
    }

    return [String(dir), pos ? String(pos) : 'middle'];
  }, [placement]);

  return <Box
    is='div'
    ref={ref}
    rcx-tooltip
    rcx-tooltip--dir={direction}
    rcx-tooltip--pos={position}

    {...props}
  />;
});

Tooltip.propTypes = {
  position: PropTypes.oneOf([
    'top-start', 'top-middle', 'top-end',
    'bottom-start', 'bottom-middle', 'bottom-end',
    'left-start', 'left-middle', 'left-end',
    'right-start', 'right-middle', 'right-end',
    'top', 'left', 'bottom', 'right',
  ]),
};
