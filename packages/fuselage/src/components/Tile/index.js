import { css } from '@rocket.chat/css-in-js';
import PropTypes from 'prop-types';
import React from 'react';

import { paddingPropType, getPaddingValue } from '../../propTypes/paddings';
import { Box } from '../Box';
import { useCss } from '../Box/useCss';

export const Tile = React.forwardRef(function Tile({
  className,
  elevation,
  padding,
  ...props
}, ref) {
  const paddingClassName = useCss(css`padding: ${ getPaddingValue(padding) };`);

  return <Box
    ref={ref}
    componentClassName='rcx-tile'
    className={[paddingClassName, className].filter(Boolean).join(' ')}
    mod-elevation={elevation}
    {...props}
  />;
});

Tile.defaultProps = {
  elevation: '1',
  padding: 'x16',
};

Tile.propTypes = {
  elevation: PropTypes.oneOf(['0', '1', '2']).isRequired,
  padding: paddingPropType.isRequired,
};
