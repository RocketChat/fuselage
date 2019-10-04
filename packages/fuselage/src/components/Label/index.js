import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { useClassName } from '../../hooks';

const LabelContext = createContext(false);

export const Label = React.forwardRef(function Label({
  children,
  className,
  error,
  position = 'top',
  required,
  text,
  ...props
}, ref) {
  const isInsideLabel = useContext(LabelContext);

  const classNames = {
    container: useClassName('rcx-label', { required, position }),
    wrapper: useClassName('rcx-label__wrapper'),
    text: useClassName('rcx-label__text', { required }),
    error: useClassName('rcx-label__error'),
  };
  const Container = isInsideLabel ? 'span' : 'label';

  return <LabelContext.Provider value={true}>
    <Container className={classNames.container} ref={ref} {...props}>
      {(text || error) && <span className={classNames.wrapper}>
        {text && <span required={required} className={classNames.text}>{text}</span>}
        {error && <span className={classNames.error}>{error}</span>}
      </span>}

      {children}
    </Container>
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
