import { getPositionStyle, getTargetBoundaries, getVariantBoundaries } from './usePosition';


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

describe('usePosition hook', () => {
  describe('getTargetBoundaries', () => {
    it('...', () => {
      const targetBoundaries = getTargetBoundaries({ referenceBox, target });
      expect(targetBoundaries.t).toEqual(150);
      expect(targetBoundaries.b).toEqual(300);
      expect(targetBoundaries.r).toEqual(100);
      expect(targetBoundaries.l).toEqual(-50);
    });
  });
  describe('getPositionStyle function', () => {
    it('returns a style for placement bottom-start', () => {
      const targetBoundaries = getTargetBoundaries({ referenceBox, target });
      const variantStore = getVariantBoundaries({ referenceBox, target });
      const style = getPositionStyle({ placement: 'bottom-start', container, targetBoundaries, variantStore, target });
      expect(style.left).toEqual('0px');
      expect(style.top).toEqual('300px');
    });
    it('returns a style for placement bottom-start if the element height does not fit', () => {
      const targetBoundaries = getTargetBoundaries({ referenceBox, target });
      const variantStore = getVariantBoundaries({ referenceBox, target });
      const style = getPositionStyle({ placement: 'bottom-start',
        container: {
          ...container,
          bottom: 300,
          height: 300,
        },
        targetBoundaries,
        variantStore,
        target });
      expect(style.left).toEqual('0px');
      expect(style.top).toEqual('150px');
    });

    it('returns a style for placement bottom-middle', () => {
      const targetBoundaries = getTargetBoundaries({ referenceBox, target });

      const variantStore = getVariantBoundaries({ referenceBox, target });

      const style = getPositionStyle({ placement: 'bottom-middle', container, targetBoundaries, variantStore, target });

      expect(style.left).toEqual('25px');
      expect(style.top).toEqual('300px');
    });
    it('returns a style for placement bottom-middle if the element height does not fit', () => {
      const targetBoundaries = getTargetBoundaries({ referenceBox, target });
      const variantStore = getVariantBoundaries({ referenceBox, target });
      const style = getPositionStyle({ placement: 'bottom-middle',
        container: {
          ...container,
          bottom: 300,
          height: 300,
        },
        targetBoundaries,
        variantStore,
        target });
      expect(style.left).toEqual('25px');
      expect(style.top).toEqual('150px');
    });

    it('returns a style for placement bottom-end', () => {
      const targetBoundaries = getTargetBoundaries({ referenceBox, target });

      const variantStore = getVariantBoundaries({ referenceBox, target });

      const style = getPositionStyle({ placement: 'bottom-end', container, targetBoundaries, variantStore, target });

      expect(style.left).toEqual('50px');
      expect(style.top).toEqual('300px');
    });
    it('returns a style for placement bottom-end if the element height does not fit', () => {
      const targetBoundaries = getTargetBoundaries({ referenceBox, target });
      const variantStore = getVariantBoundaries({ referenceBox, target });
      const style = getPositionStyle({ placement: 'bottom-end',
        container: {
          ...container,
          bottom: 300,
          height: 300,
        },
        targetBoundaries,
        variantStore,
        target });
      expect(style.left).toEqual('50px');
      expect(style.top).toEqual('150px');
    });


    it('returns a style for placement top-start', () => {
      const targetBoundaries = getTargetBoundaries({ referenceBox, target });
      const variantStore = getVariantBoundaries({ referenceBox, target });
      const style = getPositionStyle({ placement: 'top-start', container, targetBoundaries, variantStore, target });
      expect(style.left).toEqual('0px');
      expect(style.top).toEqual('150px');
    });
    it('returns a style for placement top-start if the element height does not fit', () => {
      const box = { ...referenceBox, top: 10, y: 10, bottom: 110 };
      const targetBoundaries = getTargetBoundaries({ referenceBox: box, target });
      const variantStore = getVariantBoundaries({ referenceBox: box, target });
      const style = getPositionStyle({ placement: 'top-start', container, targetBoundaries, variantStore, target });
      expect(style.left).toEqual('0px');
      expect(style.top).toEqual('110px');
    });
    it('returns a style for placement top-middle', () => {
      const targetBoundaries = getTargetBoundaries({ referenceBox, target });

      const variantStore = getVariantBoundaries({ referenceBox, target });

      const style = getPositionStyle({ placement: 'top-middle', container, targetBoundaries, variantStore, target });

      expect(style.left).toEqual('25px');
      expect(style.top).toEqual('150px');
    });
    it('returns a style for placement top-middle if the element height does not fit', () => {
      const box = { ...referenceBox, top: 10, y: 10, bottom: 110 };
      const targetBoundaries = getTargetBoundaries({ referenceBox: box, target });
      const variantStore = getVariantBoundaries({ referenceBox: box, target });
      const style = getPositionStyle({ placement: 'top-middle', container, targetBoundaries, variantStore, target });
      expect(style.left).toEqual('25px');
      expect(style.top).toEqual('110px');
    });
    it('returns a style for placement top-end', () => {
      const targetBoundaries = getTargetBoundaries({ referenceBox, target });

      const variantStore = getVariantBoundaries({ referenceBox, target });

      const style = getPositionStyle({ placement: 'top-end', container, targetBoundaries, variantStore, target });

      expect(style.left).toEqual('50px');
      expect(style.top).toEqual('150px');
    });
    it('returns a style for placement top-end if the element height does not fit', () => {
      const box = { ...referenceBox, top: 10, y: 10, bottom: 110 };
      const targetBoundaries = getTargetBoundaries({ referenceBox: box, target });
      const variantStore = getVariantBoundaries({ referenceBox: box, target });
      const style = getPositionStyle({ placement: 'top-end', container, targetBoundaries, variantStore, target });
      expect(style.left).toEqual('50px');
      expect(style.top).toEqual('110px');
    });
  });
});
