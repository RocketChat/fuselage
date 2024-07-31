import { Icon, type IconProps } from '../Icon';

/** @public */
export type StatesIconProps = {
  variation?: 'danger' | 'success' | 'warning' | 'primary';
} & IconProps;

/** @public */
const StatesIcon = ({ variation, ...props }: StatesIconProps) => (
  <Icon
    {...props}
    rcx-states__icon
    className={variation && `rcx-states__icon--${variation}`}
    size='x32'
  />
);

export default StatesIcon;
