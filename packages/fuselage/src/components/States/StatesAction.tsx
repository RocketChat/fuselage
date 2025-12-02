import { Button } from '..';
import type { ButtonProps } from '../Button/Button';

type StatesActionProps = ButtonProps;

const StatesAction = ({ primary = true, ...props }: StatesActionProps) => (
  <Button {...props} primary={primary} />
);

export default StatesAction;
