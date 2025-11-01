import type { ComponentProps } from 'react';

import { ButtonGroup } from '../../ButtonGroup/index.js';

export const TableSelectionButtonGroup = (
  props: ComponentProps<typeof ButtonGroup>,
) => <ButtonGroup {...props} />;
