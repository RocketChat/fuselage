import type { ComponentProps, Ref, ReactElement } from 'react';
import React, { forwardRef, cloneElement } from 'react';
import { FocusScope } from 'react-aria';

import Box from '../Box';

type ModalProps = { wrapper?: ReactElement } & ComponentProps<typeof Box>;

export const Modal = forwardRef(
  (
    { children, wrapper = <Box />, ...props }: ModalProps,
    ref: Ref<HTMLDivElement>
  ) => (
    <Box is='dialog' rcx-modal {...props}>
      {cloneElement(
        wrapper,
        {
          ref,
          'rcx-modal__inner': true,
          'elevation': '2',
        },
        <FocusScope contain restoreFocus autoFocus>
          {children}
        </FocusScope>
      )}
    </Box>
  )
);
