import { useMemo, useRef } from 'react';

import { useControlledState } from '../../hooks/useControlledState';

type UseSelectFilterParams<TOption> = {
  options: TOption[];
  filter?: string;
  defaultFilter?: string;
  onChangeFilter?: (filter: string) => void;
  match?: (option: TOption, filter: string) => boolean;
};

type UseSelectFilterResult<TOption> = {
  filtered: TOption[];
  filter: string;
  setFilter: (filter: string) => void;
};

export const useSelectFilter = <TOption>({
  options,
  filter: propFilter,
  defaultFilter = '',
  onChangeFilter,
  match,
}: UseSelectFilterParams<TOption>): UseSelectFilterResult<TOption> => {
  const [filter, setFilter] = useControlledState(
    propFilter,
    defaultFilter,
    onChangeFilter
  );

  const matchRef = useRef(match);
  matchRef.current = match;

  const filtered = useMemo(() => {
    if (propFilter !== undefined) {
      return options;
    }

    const match = matchRef.current;
    if (!match) {
      return options;
    }

    return options.filter((option) => match(option, filter));
  }, [propFilter, options, filter]);

  return {
    filtered,
    filter,
    setFilter,
  };
};
