import React from 'react';
import {
  Margins,
} from '@rocket.chat/fuselage';

export const Block = ({ children }) => (
  <Margins blockEnd={4}>{children}</Margins>
);
