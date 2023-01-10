import type { ComponentProps, Ref, ElementType } from 'react';
import React, { createElement, forwardRef } from 'react';
import { FocusScope } from 'react-aria';

import Box from '../Box';

type ModalProps = {
  wrapper?: ElementType<
    Pick<ComponentProps<typeof Box>, 'elevation' | 'className' | 'children'>
  >;
} & ComponentProps<typeof Box>;

export const Modal = forwardRef(
  ({ children, wrapper, ...props }: ModalProps, ref: Ref<Element>) => (
    <Box is='dialog' rcx-modal ref={ref} {...props}>
      {!wrapper && (
        <Box rcx-modal__inner elevation='2'>
          <FocusScope contain restoreFocus autoFocus>
            {children}
          </FocusScope>
        </Box>
      )}
      {wrapper &&
        createElement(wrapper, {
          children: (
            <FocusScope contain restoreFocus autoFocus>
              {children}
            </FocusScope>
          ),
          className: 'rcx-modal__inner',
          elevation: '2',
        })}
    </Box>
  )
);
