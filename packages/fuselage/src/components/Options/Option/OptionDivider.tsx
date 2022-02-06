import React, { ComponentProps } from 'react';

import { Divider } from '../..';

type OptionDividerProps = ComponentProps<typeof Divider>;

const OptionDivider = (props: OptionDividerProps) => <Divider {...props} />;

export default OptionDivider;
