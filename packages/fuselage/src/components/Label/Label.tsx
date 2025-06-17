import type { ComponentProps, ElementType } from 'react';
import { createContext, forwardRef, useContext } from 'react';

import Box from '../Box';

const LabelContext = createContext(false);

type LabelProps = Omit<ComponentProps<typeof Box>, 'is'> & {
  disabled?: boolean;
  required?: boolean;
  is?: (ElementType<any> & string) | undefined;
};

// TODO: Communicate "required", either by appending a visually hidden (required) text to the label
// Or by leveraging the context to add "aria-required" to the input element.
// Reference: https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA2
/**
 * A caption for an input component.
 */
export const Label = forwardRef(
  ({ disabled, is, required, children, ...props }: LabelProps, ref) => {
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
  },
);
