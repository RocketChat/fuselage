import React, { FC } from 'react';

import { ButtonGroup } from '../ButtonGroup';

export const Actions: FC<typeof ButtonGroup> = (props) => (
  <ButtonGroup mb='neg-x2' medium {...props} />
);
