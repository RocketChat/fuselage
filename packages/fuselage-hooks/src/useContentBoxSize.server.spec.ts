/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks/server';
import { useRef } from 'react';

import { useContentBoxSize } from './useContentBoxSize';

it('immediately returns zero size', () => {
  const { result } = renderHook(() => useContentBoxSize(useRef()));

  expect(result.current.inlineSize).toStrictEqual(0);
  expect(result.current.blockSize).toStrictEqual(0);
});
