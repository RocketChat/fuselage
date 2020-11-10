import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import { Box } from '../Box';

const LabelContext = createContext(false);

export function Label({ disabled, is, required, ...props }) {
  const isInsideLabel = useContext(LabelContext);
  const component = is || (isInsideLabel && 'span') || 'label';

  return (
    <LabelContext.Provider value={true}>
      <Box
        is={component}
        rcx-label
        rcx-label--disabled={disabled}
        rcx-label--required={required}
        {...props}
      />
    </LabelContext.Provider>
  );
}

Label.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};
