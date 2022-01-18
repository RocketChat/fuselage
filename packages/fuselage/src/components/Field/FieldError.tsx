import React, { ComponentPropsWithoutRef, FC } from 'react';

import { Box } from '../Box';

type FieldErrorProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldError: FC<FieldErrorProps> = function FieldError(props) {
  return <Box is='span' rcx-field__error {...props} />;
};
