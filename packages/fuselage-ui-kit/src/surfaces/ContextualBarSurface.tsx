import { Margins } from '@rocket.chat/fuselage';
import React, { ReactElement, ReactNode } from 'react';

import { Surface } from './Surface';

type ContextualBarSurfaceProps = {
  children?: ReactNode;
};

const ContextualBarSurface = ({ children }: ContextualBarSurfaceProps): ReactElement => (
  <Surface type='contextualBar'>
    <Margins blockEnd='x16'>{children}</Margins>
  </Surface>
);

export default ContextualBarSurface;
