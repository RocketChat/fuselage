import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { createStyledComponent } from '../../styles';
import { FieldError } from './Error';
import { FieldHint } from './Hint';
import { FieldRow } from './Row';

const FieldIdContext = createContext();

export const useFieldId = () => useContext(FieldIdContext);

const Container = createStyledComponent('rcx-field');

export const Field = React.forwardRef(function Field({ children, fieldId, ...props }, ref) {
  const defaultFieldId = useUniqueId();

  return <FieldIdContext.Provider value={fieldId || defaultFieldId}>
    <Container ref={ref} {...props}>
      {typeof children === 'function' ? children(fieldId || defaultFieldId) : children}
    </Container>
  </FieldIdContext.Provider>;
});

Field.displayName = 'Field';

Field.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

Field.Row = FieldRow;
Field.Error = FieldError;
Field.Hint = FieldHint;
