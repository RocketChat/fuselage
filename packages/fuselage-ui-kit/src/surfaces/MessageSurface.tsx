import { Margins } from '@rocket.chat/fuselage';
import React, { ReactElement, ReactNode } from 'react';

import { Surface } from './Surface';

type MessageSurfaceProps = {
  children?: ReactNode;
};

const MessageSurface = ({ children }: MessageSurfaceProps): ReactElement => (
  <Surface type='message'>
    <Margins blockEnd='x16'>{children}</Margins>
  </Surface>
);

export default MessageSurface;
