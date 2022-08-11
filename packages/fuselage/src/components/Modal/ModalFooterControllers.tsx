import type { ComponentProps } from 'react';
import React from 'react';

import { ButtonGroup } from '..';

export type ModalFooterControllersProps = ComponentProps<typeof ButtonGroup>;

export const ModalFooterControllers = ({
  children,
}: ModalFooterControllersProps) => (
  <ButtonGroup medium align='end' maxWidth='full'>
    {children}
  </ButtonGroup>
);
