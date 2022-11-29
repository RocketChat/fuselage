import styled from '@rocket.chat/styled';
import type { ReactNode, ReactElement } from 'react';
import React from 'react';

import type { ToastBarPayload } from './ToastBarContext';

const positionProps = {
  'top-start': 'top: 0; left: 0;',
  'top-end': 'top: 0; right: 0;',
  'bottom-start': 'bottom: 0; left: 0;',
  'bottom-end': 'bottom: 0; right: 0;',
};

export const ToastBarContainer = styled(
  'div',
  ({ position: _position, ...props }: Pick<ToastBarPayload, 'position'>) =>
    props
)`
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 1rem;
  z-index: 1;
  ${(p) => (p.position ? positionProps[p.position] : '')}
`;

type ToastBarZoneProps = {
  position?: ToastBarPayload['position'];
  children: ReactNode;
};

const ToastBarZone = ({
  children,
  position = 'top-end',
}: ToastBarZoneProps): ReactElement => (
  <ToastBarContainer position={position}>{children}</ToastBarContainer>
);

export default ToastBarZone;
