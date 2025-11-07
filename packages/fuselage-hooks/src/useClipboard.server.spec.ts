import { it, expect } from 'vitest';

import { renderHook } from './testing.ts';
import { useClipboard } from './useClipboard';

it('has hasCopied and copy properties', () => {
  const { result } = renderHook(() => useClipboard('Lorem Ipsum'));

  const { copy, hasCopied } = result.current;

  expect(copy).toBeInstanceOf(Function);
  expect(hasCopied).toBe(false);
});
