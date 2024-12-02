import { renderHook } from './testing';
import { useEffectEvent } from './useEffectEvent';

it('returns a callback that invokes the mutable one', () => {
  const fn = jest.fn();

  const { result } = renderHook(() => useEffectEvent(fn));

  result.current();

  expect(fn).toHaveBeenCalledTimes(1);
});
