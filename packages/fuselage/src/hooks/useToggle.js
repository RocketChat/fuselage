import { useState } from 'react';

export const useToggle = (initialValue) => {
  const [value, setValue] = useState(() => (typeof initialValue === 'function' ? !!initialValue() : !!initialValue));
  return [value, (forcedValue) => setValue(typeof forcedValue !== 'undefined' ? forcedValue : !value)];
};
