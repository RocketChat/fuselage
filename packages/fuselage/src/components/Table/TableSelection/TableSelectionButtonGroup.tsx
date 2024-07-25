import React from 'react';

import type { ButtonGroupProps } from '../../ButtonGroup';
import { ButtonGroup } from '../../ButtonGroup';

type TableSelectionButtonGroupProps = ButtonGroupProps;

export const TableSelectionButtonGroup = (
  props: TableSelectionButtonGroupProps
) => <ButtonGroup {...props} />;
