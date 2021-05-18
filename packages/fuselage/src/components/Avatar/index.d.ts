import { ComponentProps, Context, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type AvatarProps = Omit<ComponentProps<typeof Box>, 'title' | 'size'> & {
  title?: string;
  size?:
    | 'x16'
    | 'x18'
    | 'x20'
    | 'x24'
    | 'x28'
    | 'x32'
    | 'x36'
    | 'x40'
    | 'x48'
    | 'x124'
    | 'x200'
    | 'x332';
  rounded?: boolean;
  objectFit?: boolean;
  url: string;
};
export const Avatar: ForwardRefExoticComponent<AvatarProps> & {
  Context: Context<{
    baseUrl: string;
  }>;
};
