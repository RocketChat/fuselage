import { runHooks } from '../.jest/helpers';
import { useExclusiveBooleanProps } from '../src';

describe('useExclusiveBooleanProps hook', () => {
  it('allows an empty set of props', () => {
    runHooks(() => useExclusiveBooleanProps({}));
  });

  it('allows only false-valued props', () => {
    runHooks(() => useExclusiveBooleanProps({ a: false, b: false, c: false }));
  });

  it('allows one true-valued prop', () => {
    runHooks(() => useExclusiveBooleanProps({ a: true }));
  });

  it('allows one true-valued prop among false-valued ones', () => {
    runHooks(() => useExclusiveBooleanProps({ a: true, b: false, c: false }));
  });

  it('denies two true-valued props', () => {
    expect(() => {
      runHooks(() => useExclusiveBooleanProps({ a: true, b: true }));
    }).toThrow();
  });
});
