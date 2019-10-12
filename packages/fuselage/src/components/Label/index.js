import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';
import { useClassName } from '@rocket.chat/fuselage-hooks';

import { Box } from '../Box';

const LabelContext = createContext(false);

export const Label = React.forwardRef(function Label({
  className,
  children,

  error,
  position = 'top',
  required,
  text,

  ...props
}, ref) {
  const isInsideLabel = useContext(LabelContext);

  const classNames = {
    container: useClassName('rcx-label', { required, position }, className),
    wrapper: useClassName('rcx-label__wrapper', { position }),
    text: useClassName('rcx-label__text', { required }),
    error: useClassName('rcx-label__error'),
  };

  return <LabelContext.Provider value={true}>
    <Box className={classNames.container} is={isInsideLabel ? 'span' : 'label'} ref={ref} {...props}>
      {(text || error) && <Box className={classNames.wrapper} is='span'>
        {text && <Box className={classNames.text} is='span' required={required}>{text}</Box>}
        {error && <Box className={classNames.error} is='span'>{error}</Box>}
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
