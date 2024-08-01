import type { ComponentProps } from 'react';

import { ButtonGroup } from '../ButtonGroup';

type StatesActionsProps = ComponentProps<typeof ButtonGroup>;

const StatesActions = (props: StatesActionsProps) => <ButtonGroup {...props} />;

export default StatesActions;
