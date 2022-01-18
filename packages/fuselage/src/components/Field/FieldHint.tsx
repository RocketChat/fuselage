import React, { ComponentPropsWithoutRef, FC } from 'react';

import { Box } from '../Box';

type FieldHintProps = ComponentPropsWithoutRef<typeof Box>;

export const FieldHint: FC<FieldHintProps> = function FieldHint(props) {
  return <Box is='span' rcx-field__hint {...props} />;
};
