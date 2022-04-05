import type { ComponentProps } from 'react';
import React from 'react';

import { Divider } from '../..';

type OptionDividerProps = ComponentProps<typeof Divider>;

const OptionDivider = (props: OptionDividerProps) => <Divider {...props} />;

export default OptionDivider;
