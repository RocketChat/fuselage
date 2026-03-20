import type { ReactNode, SyntheticEvent } from 'react';
import { memo } from 'react';

import { Chip } from '../Chip';

type SelectedOptionsProps = {
  children: ReactNode;
  tabIndex: number;
  key: string;
  onMouseDown: (e: SyntheticEvent) => void;
};

export const SelectedOptions = memo(function SelectedOptions(
  props: SelectedOptionsProps,
) {
  return <Chip {...props} />;
});
