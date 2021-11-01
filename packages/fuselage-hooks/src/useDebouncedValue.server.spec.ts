/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';

import { useDebouncedValue } from '.';

const delay = 100;

beforeEach(() => {
  jest.useFakeTimers();
});

it('returns the initial value', () => {
  const initialValue = Symbol();

  const { result } = renderHook(() => useDebouncedValue(initialValue, delay));

  expect(result.current).toBe(initialValue);
});
