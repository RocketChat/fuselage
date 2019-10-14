import { useState } from 'react';

/**
 * Hook to create a toggleable boolean state.
 *
 * @param {*|function} initialValue - the initial value or the initial state generator function
 * @return {[*,function]} - a state boolean value and a state toggler function
 */
export const useToggle = (initialValue) => {
  const [value, setValue] = useState(() => (typeof initialValue === 'function' ? !!initialValue() : !!initialValue));
  return [value, (forcedValue) => setValue(typeof forcedValue !== 'undefined' ? forcedValue : !value)];
};
