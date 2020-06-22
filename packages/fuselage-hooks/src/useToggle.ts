import { useState, DispatchWithoutAction, Dispatch, SetStateAction } from 'react';

import { useMutableCallback } from './useMutableCallback';

// interface IUseToogle {
//   (): [boolean, DispatchWithoutAction];
//   (): [boolean, Dispatch<SetStateAction<boolean>>];
//   (initialValue: boolean): [boolean, DispatchWithoutAction];
//   (initialValue: boolean): [boolean, Dispatch<SetStateAction<boolean>>];
//   (initialValue: () => boolean): [boolean, DispatchWithoutAction];
//   (initialValue: () => boolean): [boolean, Dispatch<SetStateAction<boolean>>];
// }

/**
 * Hook to create a toggleable boolean state.
 *
 * @param initialValue - the initial value or the initial state generator function
 * @return a state boolean value and a state toggler function
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
