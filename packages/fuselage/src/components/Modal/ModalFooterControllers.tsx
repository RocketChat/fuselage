import type { ButtonGroupProps } from '..';
import { ButtonGroup } from '..';

export type ModalFooterControllersProps = ButtonGroupProps;

export const ModalFooterControllers = ({
  children,
}: ModalFooterControllersProps) => (
  <ButtonGroup align='end'>{children}</ButtonGroup>
);
