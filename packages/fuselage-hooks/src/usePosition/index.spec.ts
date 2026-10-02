import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { getPositionStyle } from '.';
import { getTargetBoundaries } from './getTargetBoundaries';
import { getVariantBoundaries } from './getVariantBoundaries';
// TODO: add tests targeting the hook itself

withResizeObserverMock();

describe('getPositionStyle function', () => {
  const createRect = (x: number, y: number, width: number, height: number) =>
    ({
      x,
      y,
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
    }) as DOMRect;

  it('returns a style for placement bottom-start', () => {
    const containerRect = createRect(0, 0, 1024, 1000);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'bottom-start';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(0);
    expect(result.style.top).toEqual(300);
  });

  it('returns a style for placement bottom-start if the element height does not fit', () => {
    const containerRect = createRect(0, 0, 1024, 300);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'bottom-start';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(0);
    expect(result.style.top).toEqual(150);
  });

  it('returns a style for placement bottom-middle', () => {
    const containerRect = createRect(0, 0, 1024, 1000);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'bottom-middle';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(25);
    expect(result.style.top).toEqual(300);
  });

  it('returns a style for placement bottom-middle if the element height does not fit', () => {
    const containerRect = createRect(0, 0, 1024, 300);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'bottom-middle';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(25);
    expect(result.style.top).toEqual(150);
  });

  it('returns a style for placement bottom-end', () => {
    const containerRect = createRect(0, 0, 1024, 1000);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'bottom-end';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(50);
    expect(result.style.top).toEqual(300);
  });

  it('returns a style for placement bottom-end if the element height does not fit', () => {
    const containerRect = createRect(0, 0, 1024, 300);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'bottom-end';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(50);
    expect(result.style.top).toEqual(150);
  });

  it('returns a style for placement top-start', () => {
    const containerRect = createRect(0, 0, 1024, 1000);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'top-start';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(0);
    expect(result.style.top).toEqual(150);
  });

  it('returns a style for placement top-start if the element height does not fit', () => {
    const containerRect = createRect(0, 0, 1024, 1000);
    const anchorRect = createRect(0, 10, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'top-start';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(0);
    expect(result.style.top).toEqual(110);
  });

  it('returns a style for placement top-middle', () => {
    const containerRect = createRect(0, 0, 1024, 1000);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'top-middle';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(25);
    expect(result.style.top).toEqual(150);
  });

  it('returns a style for placement top-middle if the element height does not fit', () => {
    const containerRect = createRect(0, 0, 1024, 1000);
    const anchorRect = createRect(0, 10, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'top-middle';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(25);
    expect(result.style.top).toEqual(110);
  });

  it('returns a style for placement top-end', () => {
    const containerRect = createRect(0, 0, 1024, 1000);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'top-end';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(50);
    expect(result.style.top).toEqual(150);
  });

  it('returns a style for placement top-end if the element height does not fit', () => {
    const containerRect = createRect(0, 0, 1024, 1000);
    const anchorRect = createRect(0, 10, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'top-end';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(50);
    expect(result.style.top).toEqual(110);
  });

  it('returns a style for placement bottom-end if the element height does not fit container height aligning vertically middle of container', () => {
    const containerRect = createRect(0, 0, 1024, 80);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'bottom-end';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual(undefined);
    expect(result.style.left).toEqual(50);
    expect(result.style.top).toEqual(15);
  });

  it('returns a style for placement bottom-end if the element height does not fit container height with overflow', () => {
    const containerRect = createRect(0, 0, 1024, 40);
    const anchorRect = createRect(0, 200, 100, 100);
    const targetRect = createRect(0, 0, 50, 50);
    const placement = 'bottom-end';

    const targetBoundaries = getTargetBoundaries({ anchorRect, targetRect });
    const variantBoundaries = getVariantBoundaries({ anchorRect, targetRect });

    const result = getPositionStyle({
      placement,
      containerRect,
      targetBoundaries,
      variantBoundaries,
      targetRect,
    });

    expect(result.style.overflowY).toEqual('auto');
    expect(result.style.left).toEqual(50);
    expect(result.style.top).toEqual(-5);
  });
  it.each(['left-start', 'right-start'] as const)(
    'keeps the correct axes for %s when no placement fits',
    (placement) => {
      const containerRect = createRect(100, 200, 200, 120);
      const anchorRect = createRect(180, 260, 40, 20);
      const targetRect = createRect(0, 0, 240, 40);
      const result = getPositionStyle({
        placement,
        containerRect,
        targetRect,
        targetBoundaries: getTargetBoundaries({ anchorRect, targetRect }),
        variantBoundaries: getVariantBoundaries({ anchorRect, targetRect }),
      });
      expect(result.style.left).toBe(80);
      expect(result.style.top).toBe(260);
      expect(result.style.overflowY).toBeUndefined();
      expect(result.placement).toBe(placement);
    },
  );

  it('uses the vertical coordinate to detect horizontal fallback overflow', () => {
    const containerRect = createRect(100, 200, 200, 100);
    const anchorRect = createRect(180, 270, 40, 20);
    const targetRect = createRect(0, 0, 240, 80);
    const result = getPositionStyle({
      placement: 'right-start',
      containerRect,
      targetRect,
      targetBoundaries: getTargetBoundaries({ anchorRect, targetRect }),
      variantBoundaries: getVariantBoundaries({ anchorRect, targetRect }),
      margin: 8,
    });
    expect(result.style.left).toBe(80);
    expect(result.style.top).toBe(270);
    expect(result.style.overflowY).toBe('auto');
    expect(result.style.bottom).toBe(8);
  });
});
