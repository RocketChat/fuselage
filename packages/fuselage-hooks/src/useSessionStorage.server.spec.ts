/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { useSessionStorage } from './useStorage';

it('returns a default value', () => {
  const { result } = renderHook(() =>
    useSessionStorage('value-key', 'value-default')
  );

  const [value] = result.current;
  expect(value).toStrictEqual('value-default');
});
