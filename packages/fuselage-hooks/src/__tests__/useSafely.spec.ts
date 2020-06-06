import { useState } from 'react';

import { runHooks } from '../jestHelpers';

import { useSafely } from '..';

describe('useSafely hook', () => {
  it('returns a new updater that invokes the previous one', () => {
    const state = Symbol();
    const updater = jest.fn();
    runHooks(() => useSafely<symbol, void>([state, updater]), [
      ([, updater]) => updater(),
    ]);

    expect(updater).toHaveBeenCalledTimes(1);
  });

  it('returns a new updater that can be called after unmount', () => {
    const state = Symbol();
    const updater = jest.fn();
    const [[, safeUpdater]] = runHooks(() => useSafely<symbol, void>([state, updater]));
    safeUpdater();

    expect(updater).toHaveBeenCalledTimes(0);
  });

  it('returns a new updater that mutates the state', () => {
    const initialState = Symbol();
    const newState = Symbol();
    const [[valueA], [valueB]] = runHooks(() => useSafely(useState<symbol>(initialState)), [
      ([, setState]) => setState(newState),
    ]);

    expect(valueA).toBe(initialState);
    expect(valueB).toBe(newState);
  });
});
