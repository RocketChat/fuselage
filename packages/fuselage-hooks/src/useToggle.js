// @flow

import { useState } from 'react';

/**
 * Hook to create a toggleable boolean state.
 *
 * @param initialValue - the initial value or the initial state generator function
 * @return a state boolean value and a state toggler function
 */
export const useToggle = (initialValue: any | () => any) => {
  const [value, setValue] = useState(() => (typeof initialValue === 'function' ? !!initialValue() : !!initialValue));
  return [value, (forcedValue: any | () => any) => setValue(typeof forcedValue !== 'undefined' ? forcedValue : !value)];
};
