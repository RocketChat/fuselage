import type { ComponentProps, Ref, FC } from 'react';
import React, { forwardRef } from 'react';
import { FocusScope } from 'react-aria';

import Box from '../Box';

type ModalProps = { wrapper?: FC<ComponentProps<typeof Box>> } & ComponentProps<
  typeof Box
>;

export const Modal = forwardRef(
  ({ children, wrapper, ...props }: ModalProps, ref: Ref<HTMLDivElement>) => (
    <Box is='dialog' rcx-modal {...props}>
      {!wrapper && (
        <Box rcx-modal__inner elevation='2'>
          <FocusScope contain restoreFocus autoFocus>
            {children}
          </FocusScope>
        </Box>
      )}
      {wrapper &&
        wrapper(
          {
            'children': (
              <FocusScope contain restoreFocus autoFocus>
                {children}
              </FocusScope>
            ),
            'rcx-modal__inner': true,
            'elevation': '2',
          },
          ref
        )}
    </Box>
  )
);
