import React, { ComponentProps, ReactElement } from 'react';

import { Box } from '../Box';

type FieldLinkProps = ComponentProps<typeof Box>;

const FieldLink = (props: FieldLinkProps): ReactElement => (
  <Box is='a' target='_blank' rcx-field__link {...props} />
);

export default FieldLink;
