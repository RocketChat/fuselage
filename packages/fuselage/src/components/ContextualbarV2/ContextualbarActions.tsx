import type { ReactElement } from 'react';
import { memo } from 'react';

import { ButtonGroup, type ButtonGroupProps } from '../ButtonGroup';

type ContextualbarActionsProps = ButtonGroupProps;

const ContextualbarActions = (
  props: ContextualbarActionsProps
): ReactElement => <ButtonGroup {...props} />;

export default memo(ContextualbarActions);
