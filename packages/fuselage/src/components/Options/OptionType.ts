import type { ReactNode } from 'react';

/** @public */
export type OptionType = [
  value: string | number,
  label: ReactNode,
  selected?: boolean,
  disabled?: boolean,
  type?: 'heading' | 'divider' | 'option',
  url?: string
];
