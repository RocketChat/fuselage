import { Margins } from '@rocket.chat/fuselage';
import React from 'react';

export const Block = ({ children, blockEnd = 'x16' }) => (
  <Margins blockEnd={blockEnd}>{children}</Margins>
);
