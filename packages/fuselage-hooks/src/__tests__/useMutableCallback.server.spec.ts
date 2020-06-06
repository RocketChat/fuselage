/**
 * @jest-environment node
 */

import { runHooksOnServer } from '../jestHelpers';

import { useMutableCallback } from '..';

describe('useMutableCallback hook on server', () => {
  it('returns a callback that invokes the mutable one', () => {
    const fn = jest.fn();
    const stableCallback = runHooksOnServer(() => useMutableCallback(fn));
    stableCallback();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
