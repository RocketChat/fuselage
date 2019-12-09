import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { Box } from '../Box';

const LabelContext = createContext(false);

const Container = Box.extend('rcx-label', 'label');
const Wrapper = Box.extend('rcx-label__wrapper', 'span');
const TextContainer = Box.extend('rcx-label__text', 'span');

export function Label({
  children,
  disabled,
  is,
  position,
  required,
  text,
  ...props
}) {
  const isInsideLabel = useContext(LabelContext);
  const component = is || (isInsideLabel && 'span') || 'label';

  return <LabelContext.Provider value={true}>
    <Container is={component} mod-position={position} {...props}>
      {text && <Wrapper mod-has-children={!!children} mod-position={position}>
        <TextContainer mod-disabled={disabled} mod-required={required}>{text}</TextContainer>
      </Wrapper>}

      {children}
    </Container>
  </LabelContext.Provider>;
}

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
