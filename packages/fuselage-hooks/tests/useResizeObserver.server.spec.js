/**
 * @jest-environment node
 */

import { runHooksOnServer } from '../.jest/helpers';
import { useResizeObserver } from '../src';

describe('useResizeObserver hook on server', () => {
  it('immediately returns undefined size', () => {
    const { width, height } = runHooksOnServer(() => useResizeObserver());
    expect(width).toBe(undefined);
    expect(height).toBe(undefined);
  });
});
