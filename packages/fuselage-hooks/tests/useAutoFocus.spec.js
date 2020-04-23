import { useState } from 'react';

import { runHooks } from '../.jest/helpers';
import { useAutoFocus } from '../src';

describe('useAutoFocus hook', () => {
  it('returns a ref', () => {
    const [ref] = runHooks(() => useAutoFocus());

    expect(ref).toMatchObject({ current: undefined });
  });

  it('invokes focus', () => {
    const focus = jest.fn();
    runHooks(() => useAutoFocus(), [
      (ref) => {
        ref.current = { focus };
      },
    ]);

    expect(focus).toHaveBeenCalledTimes(1);
  });

  it('does not invoke focus if isFocused is false', () => {
    const focus = jest.fn();
    runHooks(() => useAutoFocus(false), [
      (ref) => {
        ref.current = { focus };
      },
    ]);

    expect(focus).toHaveBeenCalledTimes(0);
  });

  it('invokes focus if isFocused is toggled', () => {
    const focus = jest.fn();
    runHooks(() => {
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
