import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';
import { FocusScope } from 'react-aria';

import Box from '../Box';

type ModalProps = { asForm?: boolean } & ComponentProps<typeof Box>;

export const Modal = forwardRef(
  ({ children, asForm, ...props }: ModalProps, ref: Ref<HTMLDivElement>) => (
    <Box is='dialog' rcx-modal {...props}>
      <Box
        ref={ref}
        is={asForm ? 'form' : undefined}
        rcx-modal__inner
        elevation='2'
      >
        <FocusScope contain restoreFocus autoFocus>
          {children}
        </FocusScope>
      </Box>
    </Box>
  )
);
