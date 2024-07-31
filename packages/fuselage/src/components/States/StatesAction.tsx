import { Button, type ButtonProps } from '../Button';

type StatesActionProps = ButtonProps;

const StatesAction = (props: StatesActionProps) => (
  <Button {...props} primary />
);

export default StatesAction;
