import { runHooks } from '../.jest/helpers';
import { useToggle } from '../src';

describe('useToggle hook', () => {
  it('has false value when an initial value is undefined', () => {
    const [[value]] = runHooks(() => useToggle());
    expect(value).toBe(false);
  });

  it('has false value when an initial value is false', () => {
    const [[value]] = runHooks(() => useToggle(false));
    expect(value).toBe(false);
  });

  it('has false value when an initial value is falsy', () => {
    const [[value]] = runHooks(() => useToggle(0 as unknown as boolean));
    expect(value).toBe(false);
  });

  it('has false value when an initial value is a function returning false', () => {
    const [[value]] = runHooks(() => useToggle(() => false));
    expect(value).toBe(false);
  });

  it('has true value when an initial value is true', () => {
    const [[value]] = runHooks(() => useToggle(true));
    expect(value).toBe(true);
  });

  it('has true value when an initial value is truthy', () => {
    const [[value]] = runHooks(() => useToggle(1 as unknown as boolean));
    expect(value).toBe(true);
  });

  it('has true value when an initial value is a function returning true', () => {
    const [[value]] = runHooks(() => useToggle(() => true));
    expect(value).toBe(true);
  });

  it('toggles false to true when toggleValue is called', () => {
    const [, [value]] = runHooks(() => useToggle(false), [
      ([, toggleValue]: [any, () => void]) => toggleValue(),
    ]);
    expect(value).toBe(true);
  });

  it('toggles false to true when toggleValue is called twice in the same render cycle', () => {
    const [, [value]] = runHooks(() => useToggle(false), [
      ([, toggleValue]: [any, () => void]) => {
        toggleValue();
        toggleValue();
      },
    ]);
    expect(value).toBe(true);
  });

  it('toggles false to false when toggleValue is called at two render cycles', () => {
    const [,, [value]] = runHooks(() => useToggle(false), [
      ([, toggleValue]: [any, () => void]) => toggleValue(),
      ([, toggleValue]: [any, () => void]) => toggleValue(),
    ]);
    expect(value).toBe(false);
  });

  it('forces false argument on toggleValue', () => {
    const [, [value]] = runHooks(() => useToggle(false), [
      ([, toggleValue]) => toggleValue(false),
    ]);
    expect(value).toBe(false);
  });

  it('forces true argument on toggleValue', () => {
    const [, [value]] = runHooks(() => useToggle(true), [
      ([, toggleValue]) => toggleValue(true),
    ]);
    expect(value).toBe(true);
  });
});
