import { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';

import { Box } from '../Box';

type InputBoxProps = ComponentProps<typeof Box> & {
  addon?: ReactNode;
  input?: ReactNode;
  error?: string;
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'textarea'
    | 'select';
};
type InputBoxSkeletonProps = ComponentProps<typeof Box>;

export const InputBox: ForwardRefExoticComponent<InputBoxProps> & {
  Skeleton: ForwardRefExoticComponent<InputBoxSkeletonProps>;
};
