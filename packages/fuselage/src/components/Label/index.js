import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { createStyledComponent } from '../../styles';
import { useFieldId } from '../Field';
import { Text } from '../Text';
import styles from './styles';

const LabelContext = createContext(false);

const Container = createStyledComponent(styles, 'rcx-label', 'label');
const Wrapper = createStyledComponent(styles, 'rcx-label__wrapper', 'span');
const TextContainer = createStyledComponent(styles, 'rcx-label__text', Text);
const ErrorContainer = createStyledComponent(styles, 'rcx-label__error', Text);

export const Label = React.forwardRef(function Label({
  children,
  disabled,
  error,
  is,
  position = 'top',
  required,
  text,
  ...props
}, ref) {
  const isInsideLabel = useContext(LabelContext);
  const component = is || (isInsideLabel && 'span') || 'label';

  const fieldId = useFieldId();

  return <LabelContext.Provider value={true}>
    <Container as={component} htmlFor={component === 'label' && fieldId} modifiers={{ position }} ref={ref} {...props}>
      {(text || error) && <Wrapper modifiers={{ position }}>
        {text && <TextContainer disabledLabelColor={disabled} modifiers={{ required }}>{text}</TextContainer>}
        {error && <ErrorContainer dangerColor>{error}</ErrorContainer>}
      </Wrapper>}

      {children}
    </Container>
  </LabelContext.Provider>;
});

Label.defaultProps = {
  position: 'top',
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

Label.styled = Container;
