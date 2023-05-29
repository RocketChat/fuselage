import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { getPositionStyle } from '.';
import { getTargetBoundaries } from './getTargetBoundaries';
import { getVariantBoundaries } from './getVariantBoundaries';
// TODO: add tests targeting the hook itself

withResizeObserverMock();

const container = {
  bottom: 1000,
  height: 1000,
  left: 0,
  right: 1024,
  top: 0,
  width: 1024,
  x: 0,
  y: 0,
} as DOMRect;

const referenceBox = {
  bottom: 300,
  height: 100,
  left: 0,
  right: 100,
  top: 200,
  width: 100,
  x: 0,
  y: 200,
} as DOMRect;

const target = {
  bottom: 50,
  height: 50,
  left: 0,
  right: 50,
  top: 0,
  width: 50,
  x: 0,
  y: 0,
} as DOMRect;

describe('getPositionStyle function', () => {
  it('returns a style for placement bottom-start', () => {
    const targetBoundaries = getTargetBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const variantStore = getVariantBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const result = getPositionStyle({
      placement: 'bottom-start',
      containerRect: container,
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });
    expect(result.style.left).toEqual('0px');
    expect(result.style.top).toEqual('300px');
  });

  it('returns a style for placement bottom-start if the element height does not fit', () => {
    const targetBoundaries = getTargetBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const variantStore = getVariantBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const result = getPositionStyle({
      placement: 'bottom-start',
      containerRect: {
        ...container,
        bottom: 300,
        height: 300,
      },
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });
    expect(result.style.left).toEqual('0px');
    expect(result.style.top).toEqual('150px');
  });

  it('returns a style for placement bottom-middle', () => {
    const targetBoundaries = getTargetBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });

    const variantStore = getVariantBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });

    const result = getPositionStyle({
      placement: 'bottom-middle',
      containerRect: container,
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });

    expect(result.style.left).toEqual('25px');
    expect(result.style.top).toEqual('300px');
  });

  it('returns a style for placement bottom-middle if the element height does not fit', () => {
    const targetBoundaries = getTargetBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const variantStore = getVariantBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const result = getPositionStyle({
      placement: 'bottom-middle',
      containerRect: {
        ...container,
        bottom: 300,
        height: 300,
      },
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });
    expect(result.style.left).toEqual('25px');
    expect(result.style.top).toEqual('150px');
  });

  it('returns a style for placement bottom-end', () => {
    const targetBoundaries = getTargetBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });

    const variantStore = getVariantBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });

    const result = getPositionStyle({
      placement: 'bottom-end',
      containerRect: container,
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });

    expect(result.style.left).toEqual('50px');
    expect(result.style.top).toEqual('300px');
  });

  it('returns a style for placement bottom-end if the element height does not fit', () => {
    const targetBoundaries = getTargetBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const variantStore = getVariantBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const result = getPositionStyle({
      placement: 'bottom-end',
      containerRect: {
        ...container,
        bottom: 300,
        height: 300,
      },
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });
    expect(result.style.left).toEqual('50px');
    expect(result.style.top).toEqual('150px');
  });

  it('returns a style for placement top-start', () => {
    const targetBoundaries = getTargetBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const variantStore = getVariantBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const result = getPositionStyle({
      placement: 'top-start',
      containerRect: container,
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });
    expect(result.style.left).toEqual('0px');
    expect(result.style.top).toEqual('150px');
  });

  it('returns a style for placement top-start if the element height does not fit', () => {
    const box = { ...referenceBox, top: 10, y: 10, bottom: 110 };
    const targetBoundaries = getTargetBoundaries({
      anchorRect: box,
      targetRect: target,
    });
    const variantStore = getVariantBoundaries({
      anchorRect: box,
      targetRect: target,
    });
    const result = getPositionStyle({
      placement: 'top-start',
      containerRect: container,
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });
    expect(result.style.left).toEqual('0px');
    expect(result.style.top).toEqual('110px');
  });

  it('returns a style for placement top-middle', () => {
    const targetBoundaries = getTargetBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });

    const variantStore = getVariantBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });

    const result = getPositionStyle({
      placement: 'top-middle',
      containerRect: container,
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });

    expect(result.style.left).toEqual('25px');
    expect(result.style.top).toEqual('150px');
  });

  it('returns a style for placement top-middle if the element height does not fit', () => {
    const box = { ...referenceBox, top: 10, y: 10, bottom: 110 };
    const targetBoundaries = getTargetBoundaries({
      anchorRect: box,
      targetRect: target,
    });
    const variantStore = getVariantBoundaries({
      anchorRect: box,
      targetRect: target,
    });
    const result = getPositionStyle({
      placement: 'top-middle',
      containerRect: container,
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });
    expect(result.style.left).toEqual('25px');
    expect(result.style.top).toEqual('110px');
  });

  it('returns a style for placement top-end', () => {
    const targetBoundaries = getTargetBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });

    const variantStore = getVariantBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });

    const result = getPositionStyle({
      placement: 'top-end',
      containerRect: container,
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });

    expect(result.style.left).toEqual('50px');
    expect(result.style.top).toEqual('150px');
  });

  it('returns a style for placement top-end if the element height does not fit', () => {
    const box = { ...referenceBox, top: 10, y: 10, bottom: 110 };
    const targetBoundaries = getTargetBoundaries({
      anchorRect: box,
      targetRect: target,
    });
    const variantStore = getVariantBoundaries({
      anchorRect: box,
      targetRect: target,
    });
    const result = getPositionStyle({
      placement: 'top-end',
      containerRect: container,
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });
    expect(result.style.left).toEqual('50px');
    expect(result.style.top).toEqual('110px');
  });

  it('returns a style for placement bottom-end if the element height does not fit container height', () => {
    const targetBoundaries = getTargetBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const variantStore = getVariantBoundaries({
      anchorRect: referenceBox,
      targetRect: target,
    });
    const result = getPositionStyle({
      placement: 'bottom-end',
      containerRect: {
        ...container,
        bottom: 50,
        height: 50,
      },
      targetBoundaries,
      variantBoundaries: variantStore,
      targetRect: target,
    });
    expect(result.style.overflowY).toEqual('auto');
    expect(result.style.left).toEqual('50px');
    expect(result.style.top).toEqual('300px');
  });
});
