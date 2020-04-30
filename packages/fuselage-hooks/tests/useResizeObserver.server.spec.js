/**
 * @jest-environment node
 */

import { runHooksOnServer } from '../.jest/helpers';
import { useResizeObserver } from '../src';

describe('useResizeObserver hook on server', () => {
  it('immediately returns undefined sizes', () => {
    const { borderBoxSize, contentBoxSize } = runHooksOnServer(() => useResizeObserver());
    expect(borderBoxSize).toBe(undefined);
    expect(contentBoxSize).toBe(undefined);
  });
});
