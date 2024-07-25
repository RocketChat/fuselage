import type { ReactElement, ElementType } from 'react';
import React, { createContext, useContext } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

const LabelContext = createContext(false);

export type LabelProps = Omit<BoxProps, 'is'> & {
  disabled?: boolean;
  required?: boolean;
  is?: (ElementType<any> & string) | undefined;
};

export function Label({
  disabled,
  is,
  required,
  children,
  ...props
}: LabelProps): ReactElement {
  const isInsideLabel = useContext(LabelContext);
  const component = is || (isInsideLabel && 'span') || 'label';

  return (
    <LabelContext.Provider value={true}>
      <Box is={component} rcx-label rcx-label--disabled={disabled} {...props}>
        {children}
        {required && (
          <Box is='span' rcx-label__required mis='x4' aria-hidden='true'>
            *
          </Box>
        )}
      </Box>
    </LabelContext.Provider>
  );
}
