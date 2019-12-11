import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { Box } from '../Box';
import { FieldError } from './Error';
import { FieldHint } from './Hint';
import { FieldRow } from './Row';

const FieldIdContext = createContext();

export const useFieldId = () => useContext(FieldIdContext);

const Container = Box.extend('rcx-field');

export function Field({ children, fieldId, ...props }) {
  const defaultFieldId = useUniqueId();

  return <FieldIdContext.Provider value={fieldId || defaultFieldId}>
    <Container {...props}>
      {typeof children === 'function' ? children(fieldId || defaultFieldId) : children}
    </Container>
  </FieldIdContext.Provider>;
}

Field.displayName = 'Field';

Field.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

Field.Row = FieldRow;
Field.Error = FieldError;
Field.Hint = FieldHint;
