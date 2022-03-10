export type SelectOption<TValue = string> = readonly [
  value: TValue,
  label: string,
  selected?: boolean
];
