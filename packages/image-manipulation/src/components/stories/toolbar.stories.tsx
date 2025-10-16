import { Toolbar } from '..';

export default {
  title: 'Toolbar',
  component: Toolbar,
};

export const Default = () => <Toolbar />;
export const Crop = () => <Toolbar modifierSelected='crop' />;
export const Doodle = () => <Toolbar modifierSelected='doodle' />;
export const Text = () => <Toolbar modifierSelected='text' />;
