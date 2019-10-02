import { testHook } from '../helpers/jest';
import { useToggle } from './useToggle';

describe('useToggle hook', () => {
  it('has false value when an initial value is undefined', () => {
    const [value] = testHook(() => useToggle());
    expect(value).toBe(false);
  });

  it('has false value when an initial value is false', () => {
    const [value] = testHook(() => useToggle(false));
    expect(value).toBe(false);
  });

  it('has false value when an initial value is falsy', () => {
    const [value] = testHook(() => useToggle(0));
    expect(value).toBe(false);
  });

  it('has false value when an initial value is a function returning false', () => {
    const [value] = testHook(() => useToggle(() => false));
    expect(value).toBe(false);
  });

  it('has true value when an initial value is true', () => {
    const [value] = testHook(() => useToggle(true));
    expect(value).toBe(true);
  });

  it('has true value when an initial value is truthy', () => {
    const [value] = testHook(() => useToggle(1));
    expect(value).toBe(true);
  });

  it('has true value when an initial value is a function returning true', () => {
    const [value] = testHook(() => useToggle(() => true));
    expect(value).toBe(true);
  });

  it('toggles false to true when toggleValue is called', () => {
    const [value] = testHook(() => useToggle(false), ([, toggleValue]) => {
      toggleValue();
    });
    expect(value).toBe(true);
  });

  it('toggles false to true when toggleValue is called twice in the same render cycle', () => {
    const [value] = testHook(() => useToggle(false), ([, toggleValue]) => {
      toggleValue();
      toggleValue();
    });
    expect(value).toBe(true);
  });

  it('toggles false to false when toggleValue is called at two render cycles', () => {
    const [value] = testHook(() => useToggle(false), ([, toggleValue]) => {
      toggleValue();
    }, ([, toggleValue]) => {
      toggleValue();
    });
    expect(value).toBe(false);
  });

  it('forces false argument on toggleValue', () => {
    const [value] = testHook(() => useToggle(false), ([, toggleValue]) => {
      toggleValue(false);
    });
    expect(value).toBe(false);
  });

  it('forces true argument on toggleValue', () => {
    const [value] = testHook(() => useToggle(true), ([, toggleValue]) => {
      toggleValue(true);
    });
    expect(value).toBe(true);
  });
});
