import type { ElementType, ForwardedRef, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type ModalProps = {
  wrapperFunction?: (
    props: Pick<BoxProps, 'elevation' | 'className' | 'children'>
  ) => ReactNode;
  wrapper?: ElementType<Pick<BoxProps, 'elevation' | 'className' | 'children'>>;
} & BoxProps;

export const Modal = forwardRef(function Modal(
  { children, wrapper = Box, wrapperFunction, ...props }: ModalProps,
  ref: ForwardedRef<Element>
) {
  const wrapperProps = {
    children,
    className: 'rcx-modal__inner',
    elevation: '2',
  } as const;

  return (
    <Box is='dialog' open aria-modal='true' rcx-modal ref={ref} {...props}>
      {wrapperFunction
        ? wrapperFunction(wrapperProps)
        : createElement(wrapper, wrapperProps)}
    </Box>
  );
});
