import type { ReactElement, ComponentProps } from 'react';
import React, { memo } from 'react';

import { ButtonGroup } from '../ButtonGroup';

const ContextualBarActions = (
  props: ComponentProps<typeof ButtonGroup>
): ReactElement => <ButtonGroup medium {...props} />;

export default memo(ContextualBarActions);
