import { ElementType, FC } from 'react';

type AutoCompleteProps = {
  value: unknown[];
  filter: string;
  setFilter?: (filter: string) => void;
  options?: { label: string; value: unknown }[];
  renderItem: ElementType;
  renderSelected?: ElementType;
  onChange: (value: unknown, action: 'remove' | undefined) => void;
  getLabel?: (option: { label: string; value: unknown }) => string;
  getValue?: (option: { label: string; value: unknown }) => unknown;
  renderEmpty?: ElementType;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
};
export const AutoComplete: FC<AutoCompleteProps>;
