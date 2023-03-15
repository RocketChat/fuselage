import type { AllHTMLAttributes } from 'react';

type ButtonMenuItemGroupProps<T> = {
  label: string;
  options: T[];
};

type ButtonMenuProps<T> =
  | (AllHTMLAttributes<HTMLElement> & {
      options: T[];
    })
  | {
      groups: ButtonMenuItemGroupProps<T>[];
    };

const ButtonMenu = <T,>(props: ButtonMenuProps<T>) => {};

export default ButtonMenu;
