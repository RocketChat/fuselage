import React from 'react';

import { createStyledComponent } from '../../styles';

const Container = createStyledComponent('rcx-divider', 'hr');

export const Divider = (props) => <Container {...props}/>;
