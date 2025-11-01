import type { ComponentProps, ReactElement, ElementType, Ref } from 'react';
import { createContext, forwardRef, useContext } from 'react';

import Box from '../Box/index.js';

const LabelContext = createContext(false);

type LabelProps = Omit<ComponentProps<typeof Box>, 'is'> & {
  disabled?: boolean;
  required?: boolean;
  is?: (ElementType<any> & string) | undefined;
};

/**
 * A caption for an input component.
 */
export const Label = forwardRef(function Label(
  { disabled, is, required, children, ...props }: LabelProps,
  ref: Ref<HTMLElement>,
): ReactElement {
  const isInsideLabel = useContext(LabelContext);
  const component = is || (isInsideLabel && 'span') || 'label';

  return (
    <LabelContext.Provider value={true}>
      <Box
        is={component}
        rcx-label
        rcx-label--disabled={disabled}
        {...props}
        ref={ref}
      >
        {children}
        {required && (
          <Box is='span' rcx-label__required mis='x4' aria-hidden='true'>
            *
          </Box>
        )}
      </Box>
    </LabelContext.Provider>
  );
});
