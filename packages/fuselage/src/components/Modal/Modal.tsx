import type { ComponentProps, Ref, ElementType, ReactNode } from 'react';
import React, { createElement, forwardRef } from 'react';

import Box from '../Box';

type ModalProps = {
  wrapperFunction?: (
    props: Pick<
      ComponentProps<typeof Box>,
      'elevation' | 'className' | 'children'
    >
  ) => ReactNode;
  wrapper?: ElementType<
    Pick<ComponentProps<typeof Box>, 'elevation' | 'className' | 'children'>
  >;
} & ComponentProps<typeof Box>;

export const Modal = forwardRef(
  (
    { children, wrapper = Box, wrapperFunction, ...props }: ModalProps,
    ref: Ref<Element>
  ) => {
    const wrapperProps = {
      children,
      className: 'rcx-modal__inner',
      elevation: '2',
    } as const;

    return (
      <Box is='dialog' aria-modal='true' rcx-modal ref={ref} {...props}>
        {wrapperFunction
          ? wrapperFunction(wrapperProps)
          : createElement(wrapper, wrapperProps)}
      </Box>
    );
  }
);
