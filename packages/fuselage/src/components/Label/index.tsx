import React, {
  ComponentProps,
  createContext,
  useContext,
  ReactElement,
  ElementType,
} from 'react';

import { Box } from '../Box';

const LabelContext = createContext(false);

type LabelProps = Omit<ComponentProps<typeof Box>, 'is'> & {
  disabled?: boolean;
  required?: boolean;
  is?: (ElementType<any> & string) | undefined;
};

export function Label({
  disabled,
  is,
  required,
  ...props
}: LabelProps): ReactElement {
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
