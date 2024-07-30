import type { ComponentProps } from 'react';
import React from 'react';

import { ButtonGroup } from '../../ButtonGroup';

export const TableSelectionButtonGroup = (
  props: ComponentProps<typeof ButtonGroup>
) => <ButtonGroup {...props} />;
