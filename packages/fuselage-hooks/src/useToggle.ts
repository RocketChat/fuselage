import { useState, DispatchWithoutAction, Dispatch, SetStateAction } from 'react';

import { useMutableCallback } from './useMutableCallback';

/**
 * Hook to create a toggleable boolean state.
 *
 * @param initialValue - the initial value or the initial state generator function
 * @returns a state boolean value and a state toggler function
 * @public
 */
export const useToggle = <D extends DispatchWithoutAction | Dispatch<SetStateAction<boolean>>>(
  initialValue?: boolean | (() => boolean),
): [boolean, D] => {
  const [value, setValue] = useState(() => {
    if (typeof initialValue === 'function') {
      return !!initialValue();
    }

    return !!initialValue;
  });

  const dispatch = useMutableCallback<D extends DispatchWithoutAction ? [] : [SetStateAction<boolean>], void>(
    (forcedValue?: SetStateAction<boolean>) => {
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
    },
  ) as D;

  return [value, dispatch];
};
