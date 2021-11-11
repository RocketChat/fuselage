/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';
import { useRef } from 'react';

import { useBorderBoxSize } from './useBorderBoxSize';

it('immediately returns zero size', () => {
  const { result } = renderHook(() => useBorderBoxSize(useRef()));

  expect(result.current.inlineSize).toStrictEqual(0);
  expect(result.current.blockSize).toStrictEqual(0);
});
