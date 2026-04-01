import type { ElementType, ReactNode } from 'react';
import { createElement, forwardRef } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';
import { Box, type BoxProps } from '../Box';

const ModalFrame = styled(RcxView, {
  name: 'Modal',
  role: 'dialog',
  position: 'static',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxHeight: '100%',
  margin: 'auto',
  backgroundColor: 'transparent',
});

const ModalInnerFrame = styled(RcxView, {
  name: 'ModalInner',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  width: '100%',
  minWidth: 0,
  padding: 0,
  color: '$fontDefault',
  borderRadius: '$x8',
  backgroundColor: '$surfaceLight',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$shadowElevationBorder',
  boxShadow:
    '0px 0px 2px 0px var(--shadowElevation2x), 0px 0px 12px 0px var(--shadowElevation2y)',
});

export type ModalProps = {
  wrapperFunction?: (
    props: Pick<BoxProps, 'elevation' | 'className' | 'children'>,
  ) => ReactNode;
  wrapper?: ElementType<Pick<BoxProps, 'elevation' | 'className' | 'children'>>;
} & BoxProps;

const Modal = forwardRef<Element, ModalProps>(
  ({ children, wrapper = Box, wrapperFunction, ...props }, ref) => {
    if (wrapperFunction || wrapper !== Box) {
      // Legacy path: use SCSS-based wrapper
      const wrapperProps = {
        children,
        className: 'rcx-modal__inner',
        elevation: '2',
      } as const;

      return (
        <ModalFrame ref={ref} aria-modal='true' {...(props as any)}>
          {wrapperFunction
            ? wrapperFunction(wrapperProps)
            : createElement(wrapper, wrapperProps)}
        </ModalFrame>
      );
    }

    return (
      <ModalFrame ref={ref} aria-modal='true' {...(props as any)}>
        <ModalInnerFrame>{children}</ModalInnerFrame>
      </ModalFrame>
    );
  },
);

export default Modal;
