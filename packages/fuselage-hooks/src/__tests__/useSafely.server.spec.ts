/**
 * @jest-environment node
 */

import { runHooksOnServer } from '../jestHelpers';

import { useSafely } from '..';

describe('useSafely hook on server', () => {
  it('returns the initial state', () => {
    const initialState = Symbol();
    const updater = jest.fn();
    const [value] = runHooksOnServer(() => useSafely([initialState, updater]));

    expect(value).toBe(initialState);
  });
});
