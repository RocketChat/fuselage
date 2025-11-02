import { useRef } from 'react';
import { it, expect } from 'vitest';

import { renderHook } from './testing.ts';
import { useBorderBoxSize } from './useBorderBoxSize';

it('immediately returns zero size', () => {
  const { result } = renderHook(() => useBorderBoxSize(useRef(null)));

  expect(result.current.inlineSize).toStrictEqual(0);
  expect(result.current.blockSize).toStrictEqual(0);
});
