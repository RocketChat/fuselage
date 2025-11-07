import { it, expect } from 'vitest';

import { renderHook } from './testing.ts';
import { useSessionStorage } from './useStorage';

it('returns a default value', () => {
  const { result } = renderHook(() =>
    useSessionStorage('value-key', 'value-default'),
  );

  const [value] = result.current;
  expect(value).toStrictEqual('value-default');
});
