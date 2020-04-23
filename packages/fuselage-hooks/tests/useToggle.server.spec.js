/**
 * @jest-environment node
 */

import { runHooksOnServer } from '../.jest/helpers';
import { useToggle } from '../src';

describe('useToggle hook on server', () => {
  it('has false value when an initial value is undefined', () => {
    const [value] = runHooksOnServer(() => useToggle());
    expect(value).toBe(false);
  });

  it('has false value when an initial value is false', () => {
    const [value] = runHooksOnServer(() => useToggle(false));
    expect(value).toBe(false);
  });

  it('has false value when an initial value is falsy', () => {
    const [value] = runHooksOnServer(() => useToggle(0));
    expect(value).toBe(false);
  });

  it('has false value when an initial value is a function returning false', () => {
    const [value] = runHooksOnServer(() => useToggle(() => false));
    expect(value).toBe(false);
  });

  it('has true value when an initial value is true', () => {
    const [value] = runHooksOnServer(() => useToggle(true));
    expect(value).toBe(true);
  });

  it('has true value when an initial value is truthy', () => {
    const [value] = runHooksOnServer(() => useToggle(1));
    expect(value).toBe(true);
  });

  it('has true value when an initial value is a function returning true', () => {
    const [value] = runHooksOnServer(() => useToggle(() => true));
    expect(value).toBe(true);
  });
});
