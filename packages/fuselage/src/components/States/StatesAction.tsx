import { Button, type ButtonProps } from '../Button';

/** @public */
export type StatesActionProps = ButtonProps;

/** @public */
const StatesAction = (props: StatesActionProps) => (
  <Button {...props} primary />
);

export default StatesAction;
