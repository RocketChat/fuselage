import { Margins } from '@rocket.chat/fuselage';
import React, { ReactElement, ReactNode } from 'react';

import { Surface } from './Surface';

type ModalSurfaceProps = {
  children?: ReactNode;
};

const ModalSurface = ({ children }: ModalSurfaceProps): ReactElement => (
  <Surface type='modal'>
    <Margins blockEnd='x16'>{children}</Margins>
  </Surface>
);

export default ModalSurface;
