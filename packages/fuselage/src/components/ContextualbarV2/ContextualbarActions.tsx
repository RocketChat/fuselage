import type { ReactElement } from 'react';
import { memo } from 'react';

import type { ButtonGroupProps } from '..';
import { ButtonGroup } from '..';

const ContextualbarActions = (props: ButtonGroupProps): ReactElement => (
  <ButtonGroup {...props} />
);

export default memo(ContextualbarActions);
