import React from 'react';

import type { DividerProps } from '../Divider';
import { Divider } from '../Divider';

type OptionDividerProps = DividerProps;

const OptionDivider = (props: OptionDividerProps) => <Divider {...props} />;

export default OptionDivider;
