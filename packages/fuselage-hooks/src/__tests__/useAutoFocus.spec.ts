import { useState, MutableRefObject } from 'react';

import { runHooks } from '../jestHelpers';

import { useAutoFocus } from '..';

type DummyElement = { focus: () => void };

describe('useAutoFocus hook', () => {
  it('returns a ref', () => {
    const [ref] = runHooks(() => useAutoFocus());

    expect(ref).toMatchObject({ current: undefined });
  });

  it('invokes focus', () => {
    const focus = jest.fn();
    runHooks(() => useAutoFocus(), [
      (ref: MutableRefObject<DummyElement>) => {
        ref.current = { focus };
      },
    ]);

    expect(focus).toHaveBeenCalledTimes(1);
  });

  it('does not invoke focus if isFocused is false', () => {
    const focus = jest.fn();
    runHooks(() => useAutoFocus(false), [
      (ref: MutableRefObject<DummyElement>) => {
        ref.current = { focus };
      },
    ]);

    expect(focus).toHaveBeenCalledTimes(0);
  });

  it('invokes focus if isFocused is toggled', () => {
    const focus = jest.fn();
    runHooks<[MutableRefObject<DummyElement>, (x: boolean) => void]>(() => {
      const [isFocused, setFocused] = useState(false);
      return [useAutoFocus(isFocused), setFocused];
    }, [
      ([ref]) => {
        ref.current = { focus };
      },
      ([, setFocused]) => {
        setFocused(true);
      },
    ]);

    expect(focus).toHaveBeenCalledTimes(1);
  });
});
