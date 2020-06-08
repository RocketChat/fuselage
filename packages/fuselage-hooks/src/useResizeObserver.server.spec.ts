/**
 * @jest-environment node
 */

import { runHooksOnServer } from './jestHelpers';
import { useResizeObserver } from '.';

describe('useResizeObserver hook on server', () => {
  it('immediately returns undefined sizes', () => {
    const { borderBoxSize, contentBoxSize } = runHooksOnServer(() => useResizeObserver());
    expect(borderBoxSize).toBe(undefined);
    expect(contentBoxSize).toBe(undefined);
  });
});
