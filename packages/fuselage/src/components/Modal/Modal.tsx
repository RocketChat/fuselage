import type { ElementType, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type ModalProps = {
  wrapperFunction?: (
    props: Pick<BoxProps, 'elevation' | 'className' | 'children'>,
  ) => ReactNode;
  wrapper?: ElementType<Pick<BoxProps, 'elevation' | 'className' | 'children'>>;
} & BoxProps;

const Modal = forwardRef<Element, ModalProps>(
  ({ children, wrapper = Box, wrapperFunction, ...props }, ref) => {
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
  },
);

export default Modal;
