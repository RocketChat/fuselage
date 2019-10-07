import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { Box } from '../Box';

const LabelContext = createContext(false);

export const Label = React.forwardRef(function Label({
  children,
  error,
  position = 'top',
  required,
  text,
  ...props
}, ref) {
  const isInsideLabel = useContext(LabelContext);

  return <LabelContext.Provider value={true}>
    <Box is={isInsideLabel ? 'span' : 'label'} ref={ref} styles={['rcx-label', { required, position }]} {...props}>
      {(text || error) && <Box is='span' styles={['rcx-label__wrapper', { position }]}>
        {text && <Box is='span' required={required} styles={['rcx-label__text', { required }]}>{text}</Box>}
        {error && <Box is='span' styles={['rcx-label__error']}>{error}</Box>}
      </Box>}

      {children}
    </Box>
  </LabelContext.Provider>;
});

Label.defaultProps = {
  position: 'top',
};

Label.displayName = 'Label';

Label.propTypes = {
  position: PropTypes.oneOf(['top', 'start', 'end']),
  required: PropTypes.bool,
  text: PropTypes.string,
};
