import { testHook } from '../.jest/helpers';
import { useExclusiveBooleanProps } from '../src';

describe('useExclusiveBooleanProps hook', () => {
  it('allows an empty set of props', () => {
    testHook(() => useExclusiveBooleanProps({}));
  });

  it('allows only false-valued props', () => {
    testHook(() => useExclusiveBooleanProps({ a: false, b: false, c: false }));
  });

  it('allows one true-valued prop', () => {
    testHook(() => useExclusiveBooleanProps({ a: true }));
  });

  it('allows one true-valued prop among false-valued ones', () => {
    testHook(() => useExclusiveBooleanProps({ a: true, b: false, c: false }));
  });

  it('denies two true-valued props', () => {
    expect(() => {
      testHook(() => useExclusiveBooleanProps({ a: true, b: true }));
    }).toThrow();
  });
});
