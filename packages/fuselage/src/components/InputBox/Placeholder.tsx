import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react';

import { Box } from '../Box';

type PlaceholderProps = ComponentProps<typeof Box>;

export const Placeholder: ForwardRefExoticComponent<PlaceholderProps> =
  forwardRef(function Placeholder(props: PlaceholderProps, ref) {
    return <Box is='option' rcx-input-box__placeholder ref={ref} {...props} />;
  });
