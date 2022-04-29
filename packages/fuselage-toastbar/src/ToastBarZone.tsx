// import { Box } from '@rocket.chat/fuselage';
import styled from '@rocket.chat/styled';
import type { ReactNode, ReactElement } from 'react';
import React from 'react';

import type { ToastBarPayload } from './ToastBarContext';

export const ToastBarContainer = styled(
  'div',
  ({ position: _position, ...props }: Pick<ToastBarPayload, 'position'>) =>
    props
)`
  position: fixed;
  ${(p) =>
    p.position
      ? 'top-end' &&
        `
      top: 0;
      right: 0;
  `
      : ''}
`;

// width: ${(p) => (p.progress ? p.progress : '0%')};

type ToastBarZoneProps = {
  position?: ToastBarPayload['position'];
  children: ReactNode;
};

const ToastBarZone = ({
  children,
  position,
}: ToastBarZoneProps): ReactElement => (
  <ToastBarContainer position={position}>
    <div>{children}</div>
  </ToastBarContainer>
);

export default ToastBarZone;
