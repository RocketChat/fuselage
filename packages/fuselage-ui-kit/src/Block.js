import React from 'react';
import {
  Margins,
} from '@rocket.chat/fuselage';

export const Block = ({ children, blockEnd = 'x16' }) => (
  <Margins blockEnd={blockEnd}>{children}</Margins>
);
