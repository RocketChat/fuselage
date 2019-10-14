import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { useTheme } from '../../hooks/useTheme';
import { StyledLabel, Wrapper, Text, Error } from './styles';

const LabelContext = createContext(false);

export const Label = React.forwardRef(function Label({
  className,
  children,
  disabled,
  error,
  is,
  position = 'top',
  required,
  text,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-label', {}, className),
    wrapper: useClassName('rcx-label__wrapper', {}),
    text: useClassName('rcx-label__text', {}),
    error: useClassName('rcx-label__error'),
  };
  const theme = useTheme();

  const isInsideLabel = useContext(LabelContext);
  const component = is || (isInsideLabel && 'span') || 'label';

  return <LabelContext.Provider value={true}>
    <StyledLabel className={classNames.container} as={component} position={position} ref={ref} theme={theme} {...props}>
      {(text || error) && <Wrapper className={classNames.wrapper} position={position} theme={theme}>
        {text && <Text className={classNames.text} disabled={disabled} required={required} theme={theme}>{text}</Text>}
        {error && <Error className={classNames.error} theme={theme}>{error}</Error>}
      </Wrapper>}

      {children}
    </StyledLabel>
  </LabelContext.Provider>;
});

Label.defaultProps = {
  position: 'top',
};

Label.displayName = 'Label';

Label.propTypes = {
  disabled: PropTypes.bool,
  invisible: PropTypes.bool,
  is: PropTypes.elementType,
  position: PropTypes.oneOf(['top', 'start', 'end']),
  required: PropTypes.bool,
  text: PropTypes.string,
};
