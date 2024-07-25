import React from 'react';

import { ButtonGroup, type ButtonGroupProps } from '../ButtonGroup';

export type ModalFooterControllersProps = ButtonGroupProps;

export const ModalFooterControllers = ({
  children,
}: ModalFooterControllersProps) => (
  <ButtonGroup align='end'>{children}</ButtonGroup>
);
