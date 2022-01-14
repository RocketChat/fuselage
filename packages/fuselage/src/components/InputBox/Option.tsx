import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  Ref,
} from 'react';

import { Box } from '../Box';

type OptionProps = ComponentProps<typeof Box> & {
  children: ReactNode;
};

export const Option: ForwardRefExoticComponent<OptionProps> = forwardRef(
  function Option(props: OptionProps, ref: Ref<HTMLInputElement>) {
    return <Box is='option' rcx-input-box__option ref={ref} {...props} />;
  }
);
