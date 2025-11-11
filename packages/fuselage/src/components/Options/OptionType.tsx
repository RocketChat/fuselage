import type { ReactNode } from 'react';

export type OptionType<TValue = string | number, TLabel = ReactNode> = [
  value: TValue,
  label: TLabel,
  selected?: boolean,
  disabled?: boolean,
  type?: 'heading' | 'divider' | 'option',
  url?: string,
];
