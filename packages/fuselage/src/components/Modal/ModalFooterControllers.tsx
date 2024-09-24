import type { ComponentProps } from 'react';

import { ButtonGroup } from '..';

export type ModalFooterControllersProps = ComponentProps<typeof ButtonGroup>;

export const ModalFooterControllers = ({
  children,
}: ModalFooterControllersProps) => (
  <ButtonGroup align='end'>{children}</ButtonGroup>
);
