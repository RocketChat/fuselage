import styled from '@rocket.chat/styled';
import type { ReactNode, ReactElement } from 'react';

import type { ToastBarPayload } from './ToastBarContext';

const positionProps = {
  'top-start': {
    ltr: 'top: 0; left: 0; right: unset; bottom: unset;',
    rtl: 'top: 0; right: 0; left: unset; bottom: unset;',
  },
  'top-end': {
    ltr: 'top: 0; right: 0; left: unset; bottom: unset;',
    rtl: 'top: 0; left: 0; right: unset; bottom: unset;',
  },
  'bottom-start': {
    ltr: 'bottom: 0; left: 0; right: unset; top: unset;',
    rtl: 'bottom: 0; right: 0; left: unset; top: unset;',
  },
  'bottom-end': {
    ltr: 'bottom: 0; right: 0; left: unset; top: unset;',
    rtl: 'bottom: 0; left: 0; right: unset; top: unset;',
  },
};

export const ToastBarContainer = styled(
  'div',
  ({ position: _position, ...props }: Pick<ToastBarPayload, 'position'>) =>
    props,
)`
  position: fixed;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  ${(p) => (p.position ? positionProps[p.position].ltr : '')}
  [dir='rtl'] & {
    ${(p) => (p.position ? positionProps[p.position].rtl : '')}
  }
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
