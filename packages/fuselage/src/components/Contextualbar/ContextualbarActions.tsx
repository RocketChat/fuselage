import { memo } from 'react';

import { ButtonGroup, type ButtonGroupProps } from '../ButtonGroup';

/**
 * @deprecated Use `ContextualbarV2ActionsProps` instead.
 */
export type ContextualbarActionsProps = ButtonGroupProps;

const ContextualbarActions = (props: ContextualbarActionsProps) => (
  <ButtonGroup {...props} />
);

/**
 * @deprecated Use `ContextualbarV2Actions` instead.
 */
export default memo(ContextualbarActions);
