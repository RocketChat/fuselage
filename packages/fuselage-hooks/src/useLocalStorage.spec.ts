import { it, expect } from 'vitest';

import { renderHook, act } from './testing.ts';
import { useLocalStorage } from './useStorage';

it('returns a default value', () => {
  const { result } = renderHook(() =>
    useLocalStorage('value-key', 'value-default'),
  );

  const [value] = result.current;
  expect(value).toStrictEqual('value-default');
});

it('returns a new value', () => {
  const { result } = renderHook(() =>
    useLocalStorage('value-key', 'value-default'),
  );
  const [, setValue] = result.current;

  act(() => {
    setValue('value-new');
  });

  const [value] = result.current;
  expect(value).toStrictEqual('value-new');
});
