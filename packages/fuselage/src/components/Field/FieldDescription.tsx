import React, { ComponentPropsWithoutRef, FC } from 'react';

import { Box } from '../Box';

type FieldDescriptionProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldDescription: FC<FieldDescriptionProps> =
  function FieldDescription(props) {
    return <Box is='span' rcx-field__description {...props} />;
  };
