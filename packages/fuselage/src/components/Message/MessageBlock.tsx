import React, { AllHTMLAttributes, ComponentProps, FC } from 'react';

import { Box, useArrayLikeClassNameProp } from '../Box';

export const MessageBlock: FC<
  AllHTMLAttributes<HTMLDivElement> & {
    className: ComponentProps<typeof Box>['className'];
  }
> = function MessageBlock({ className, ...props }) {
  return (
    <div
      className={
        className
          ? useArrayLikeClassNameProp({
              ...props,
              className: [className, 'rcx-box rcx-box--full rcx-message-block'],
            }).className
          : 'rcx-box rcx-box--full rcx-message-block'
      }
      {...props}
    />
  );
};
