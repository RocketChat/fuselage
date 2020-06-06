import { useState, DispatchWithoutAction, Dispatch, SetStateAction } from 'react';

import { useMutableCallback } from './useMutableCallback';

/**
 * Hook to create a toggleable boolean state.
 *
 * @param initialValue - the initial value or the initial state generator function
 * @return a state boolean value and a state toggler function
 */
export const useToggle = (initialValue?: boolean | (() => boolean)): [boolean, DispatchWithoutAction | Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState(() => {
    if (typeof initialValue === 'function') {
      return !!initialValue();
    }

    return !!initialValue;
  });

  const dispatch = useMutableCallback((forcedValue?: SetStateAction<boolean>) => {
    // uses value from scope to avoid multiple toggles in one render cycle
    setValue(() => {
      if (typeof forcedValue === 'boolean') {
        return forcedValue;
      }

      if (typeof forcedValue === 'function') {
        return forcedValue(value);
      }

      return !value;
    });
  });

  return [value, dispatch];
};
