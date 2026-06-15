import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type InputBoxAddonProps = BoxProps & {
  addonStart?: boolean;
};

const InputBoxAddon = forwardRef<HTMLSpanElement, InputBoxAddonProps>(
  function InputBoxAddon({ addonStart, ...props }, ref) {
    return (
      <Box
        is='span'
        rcx-input-box__addon
        rcx-input-box__addon--start={addonStart}
        rcx-input-box__addon--end={!addonStart}
        ref={ref}
        {...props}
      />
    );
  },
);

export default InputBoxAddon;
