import type { ReactElement, ComponentProps } from 'react';
import { memo } from 'react';

import { ButtonGroup } from '..';

const ContextualbarActions = (
  props: ComponentProps<typeof ButtonGroup>
): ReactElement => <ButtonGroup {...props} />;

export default memo(ContextualbarActions);
