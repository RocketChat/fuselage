import type { Keys } from '@rocket.chat/icons';
import type {
  ComponentProps,
  Dispatch,
  ElementType,
  SetStateAction,
} from 'react';
import React from 'react';

import { localeIncludes } from '../../helpers/localeIncludes';
import type { SelectOption } from '../../types/SelectOption';
import type { Box } from '../Box';
import { CheckOption } from '../Options';
import MultiSelectFilteredAnchor from './MultiSelectFilteredAnchor';
import MultiSelectValue from './MultiSelectValue';
import SelectAddon from './SelectAddon';
import SelectContainer from './SelectContainer';
import SelectDropdown from './SelectDropdown';
import SelectWrapper from './SelectWrapper';
import { useSelect } from './useSelect';

type MultiSelectFilteredProps = Omit<
  ComponentProps<typeof Box>,
  'onChange' | 'value'
> & {
  value?: SelectOption[0][];
  options: SelectOption[];
  onChange?: (
    values: string[],
    selectedOptions: SelectOption<string>[]
  ) => void;
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
  addonIcon?: Keys;
  error?: string | boolean;
  customEmpty?: string;
  renderItem?: ElementType;
};

const MultiSelectFiltered = ({
  value,
  options,
  onChange,
  filter: propFilter,
  setFilter: propSetFilter,
  placeholder,
  disabled = false,
  error = false,
  addonIcon,
  renderItem = CheckOption,
  customEmpty,
  ...containerProps
}: MultiSelectFilteredProps) => {
  const {
    selected,
    select,
    filter,
    setFilter,
    containerRef,
    anchorRef,
    anchorProps,
    dropdownProps,
    dropdownOpen,
    triggerDropdown,
  } = useSelect({
    options,
    multiple: true,
    values: value,
    onChange,
    getValue: ([value]) => value,
    filter: propFilter,
    onChangeFilter: propSetFilter,
    matchFilter: ([, label], filter) =>
      localeIncludes(label, filter, {
        sensitivity: 'base',
      }),
    toDropdownOption: ([value, label], selected) => [value, label, selected],
  });

  return (
    <SelectContainer
      ref={containerRef}
      disabled={disabled}
      invalid={Boolean(error)}
      onClick={triggerDropdown}
      {...containerProps}
    >
      <SelectWrapper>
        {selected.map((selected) => (
          <MultiSelectValue
            key={selected[0]}
            label={selected[1]}
            accessibleLabel={selected[1]}
            onClick={() => select(selected)}
          />
        ))}
        <MultiSelectFilteredAnchor
          ref={anchorRef}
          filter={filter}
          onChangeFilter={setFilter}
          placeholder={placeholder}
          disabled={disabled}
          {...anchorProps}
        />
      </SelectWrapper>
      <SelectAddon icon={addonIcon} closed={dropdownOpen} />
      <SelectDropdown
        anchorRef={containerRef}
        renderItem={renderItem}
        customEmpty={customEmpty}
        multiple
        {...dropdownProps}
      />
    </SelectContainer>
  );
};

export default MultiSelectFiltered;
