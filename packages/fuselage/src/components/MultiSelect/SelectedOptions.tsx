import React, { memo, NamedExoticComponent, SyntheticEvent } from 'react';

import Chip from '../Chip';

type SelectedOptionsProps = {
  tabIndex: number;
  role: string;
  key: string;
  onMouseDown: (e: SyntheticEvent) => void;
  children: string | void;
};

export const SelectedOptions: NamedExoticComponent<SelectedOptionsProps> = memo(
  (props) => <Chip {...props} />
);
