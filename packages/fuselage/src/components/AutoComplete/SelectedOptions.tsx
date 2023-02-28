import type { ComponentProps } from 'react';
import React, { memo } from 'react';

import Chip from '../Chip';

type SelectedOptionsProps = ComponentProps<typeof Chip>;

const SelectedOptions = (props: SelectedOptionsProps) => <Chip {...props} />;

export default memo(SelectedOptions);
