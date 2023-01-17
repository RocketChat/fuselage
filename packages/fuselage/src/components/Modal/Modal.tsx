import type { ComponentProps, Ref, ElementType } from 'react';
import React, { createElement, forwardRef } from 'react';

import Box from '../Box';

type ModalProps = {
  wrapper?: ElementType<
    Pick<ComponentProps<typeof Box>, 'elevation' | 'className' | 'children'>
  >;
} & ComponentProps<typeof Box>;

export const Modal = forwardRef(
  ({ children, wrapper = Box, ...props }: ModalProps, ref: Ref<Element>) => (
    <Box is='dialog' rcx-modal ref={ref} {...props}>
      {createElement(wrapper, {
        children,
        className: 'rcx-modal__inner',
        elevation: '2',
      })}
    </Box>
  )
);
