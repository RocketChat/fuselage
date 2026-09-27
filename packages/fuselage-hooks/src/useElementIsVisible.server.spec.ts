import { renderHook } from './testing';
import { useElementIsVisible } from './useElementIsVisible';

it('renders on the server without constructing an IntersectionObserver', () => {
  const { result } = renderHook(() => useElementIsVisible());

  expect(result.current[1]).toBe(false);
});
