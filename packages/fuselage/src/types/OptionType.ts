import type { ReactNode } from 'react';

export type OptionType<TValue = string | number> = [
  value: TValue,
  label: ReactNode,
  selected?: boolean,
  type?: 'heading' | 'divider' | 'option'
];
