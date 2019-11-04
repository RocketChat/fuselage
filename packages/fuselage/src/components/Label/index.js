import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { createStyledComponent } from '../../styles';

const LabelContext = createContext(false);

const Container = createStyledComponent('rcx-label', 'label');
const Wrapper = createStyledComponent('rcx-label__wrapper', 'span');
const TextContainer = createStyledComponent('rcx-label__text', 'span');

export const Label = React.forwardRef(function Label({
  children,
  disabled,
  is,
  position,
  required,
  text,
  ...props
}, ref) {
  const isInsideLabel = useContext(LabelContext);
  const component = is || (isInsideLabel && 'span') || 'label';

  return <LabelContext.Provider value={true}>
    <Container as={component} mod-position={position} ref={ref} {...props}>
      {text && <Wrapper mod-has-children={!!children} mod-position={position}>
        <TextContainer mod-disabled={disabled} mod-required={required}>{text}</TextContainer>
      </Wrapper>}

      {children}
    </Container>
  </LabelContext.Provider>;
});

Label.defaultProps = {
  position: 'start',
};

Label.displayName = 'Label';

Label.propTypes = {
  disabled: PropTypes.bool,
  /** Is this component visible? */
  invisible: PropTypes.bool,
  is: PropTypes.elementType,
  position: PropTypes.oneOf(['top', 'start', 'end']),
  required: PropTypes.bool,
  text: PropTypes.string,
};
