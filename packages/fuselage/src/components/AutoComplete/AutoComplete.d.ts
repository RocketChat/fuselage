import { ElementType, FC } from 'react';

type AutoCompleteProps = {
  value: string | number;
  filter: string;
  setFilter?: (filter: string) => void;
  options?: { label: string; value: unknown }[];
  renderItem?: ElementType;
  renderSelected?: ElementType;
  onChange: (value) => void;
  getLabel?: (option: { label: string; value: unknown }) => string;
  getValue?: (option: { label: string; value: unknown }) => unknown;
  renderEmpty?: ElementType;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
};
export const AutoComplete: FC<AutoCompleteProps>;
