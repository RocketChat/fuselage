import { useMemo, useEffect } from 'react';

import { useDebouncedState } from './useDebouncedState';

export type PostionOptions = {
  margin?: number;
  container?: Element;
  placement?: Placements;
  watch?: boolean;
};

export type PositionFlipOrder = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};

type Boundaries = {
  t: number,
  b: number,
  r: number,
  l: number,
}

type VariantBoundaries = {
  vm: number,
  vs: number,
  ve: number,
  hs: number,
  he: number,
  hm: number,
}

type PositionStyle = {
  top: string,
  left: string,
  position: 'fixed',
  zIndex: '9999',
}

export type Positions = 'top' | 'left' | 'bottom' | 'right';

export type Placements =
    'top-start' | 'top-middle' | 'top-end' |
    'bottom-start' | 'bottom-middle' | 'bottom-end' |
    'left-start' | 'left-middle' | 'left-end' |
    'right-start' | 'right-middle' | 'right-end' |
    Positions;


const fallbackOrderVariant = {
  start: 'sem',
  middle: 'mse',
  end: 'esm',
};

const fallbackOrder = {
  top: 'tbrl',
  bottom: 'btrl',
  right: 'rltb',
  left: 'lrbt',
};

const getParents = function(element: Element) : Array<Element | Window> {
  // Set up a parent array
  const parents = [];
  for (let el = element.parentNode; el && el !== document; el = el.parentNode) {
    parents.push(el);
  }
  return parents.filter((element) => element.nodeType !== Node.TEXT_NODE);
};

function getScrollParents(element: Element): Array<Element | Window> {
  const parents = getParents(element);

  return parents;
}

const useBoundingClientRect = (element: Element, watch = false) : DOMRect => {
  const [value, setValue] = useDebouncedState(() => {
    if (element) {
      return element.getBoundingClientRect();
    }
    return {
      x: 0, y: 0, width: 0, height: 0,
    } as DOMRect;
  }, 30);

  useEffect(() => {
    if (!element) {
      return;
    }

    setValue(element.getBoundingClientRect());

    if (!watch) {
      return;
    }

    const update = () : void => {
      setValue(element.getBoundingClientRect());
    };

    const parents = getScrollParents(element);
    const passive = { passive: true };

    document.body.addEventListener('resize', update);
    parents.forEach((element) => element.addEventListener('scroll', update, passive));

    return () => {
      document.body.removeEventListener('resize', update);
      parents.forEach((element) => element.removeEventListener('scroll', update));
    };
  }, [element, watch, setValue]);
  return value;
};


export const getPositionStyle = ({ placement = 'bottom-start', container, targetBoundaries, variantStore, target } : { placement: Placements, target: DOMRect, container: DOMRect, targetBoundaries: Boundaries, variantStore: VariantBoundaries }) : PositionStyle | null => {
  const { top, left, bottom, right } = container;

  const [placementKey, variantKey = 'middle'] = placement.split('-');

  const placementAttempts = fallbackOrder[placementKey];
  const variantsAttempts = fallbackOrderVariant[variantKey];

  for (const placementAttempt of placementAttempts) {
    const point = targetBoundaries[placementAttempt];

    const [positionBox, variantBox] = [target.height, target.width];
    const [positionMaximum, variantMaximum] = [bottom, right];
    const [positionMinimum, variantMinimum] = [top, left];

    // if the point extrapolate the container boundaries
    if (point < positionMinimum || point + positionBox > positionMaximum) {
      continue;
    }

    for (const v of variantsAttempts) {
      // The position-value, the related size value of the popper and the limit
      const variantPoint = variantStore[`v${ v }`];

      if (variantPoint < variantMinimum || (variantPoint + variantBox) > variantMaximum) {
        continue;
      }

      return {
        top: `${ point }px`,
        left: `${ variantPoint }px`,
        position: 'fixed',
        zIndex: '9999',
      };
    }
  }

  const point = targetBoundaries[placementAttempts[0]];
  const variantPoint = variantStore[`${ placementAttempts[0] }${ variantsAttempts[0] }`];

  return {
    top: `${ point }px`,
    left: `${ variantPoint }px`,
    position: 'fixed',
    zIndex: '9999',
  };
};

export const getTargetBoundaries = ({ referenceBox, target, margin = 0 } : { referenceBox: DOMRect, target: DOMRect, margin?: number }) : Boundaries => ({
  t: referenceBox.top - target.height - margin,
  b: referenceBox.bottom + margin,
  r: referenceBox.right + margin,
  l: referenceBox.left - target.width - margin,
});


export const getVariantBoundaries = ({ referenceBox, target } : { referenceBox: DOMRect, target: DOMRect }) : VariantBoundaries => ({
  vm: (-target.width / 2) + (referenceBox.left + referenceBox.width / 2),
  vs: referenceBox.left,
  ve: referenceBox.left + referenceBox.width - target.width,
  hs: referenceBox.bottom - referenceBox.height,
  he: referenceBox.bottom - target.height,
  hm: referenceBox.bottom - referenceBox.height / 2 - target.height / 2,
});

/**
 * Hook to deal with sessionStorage
 * @param reference - the anchor
 * @param targetEl - the element to be positioned
 * @param options - options to position
 * @returns a state and a setter function
 * @public
 */

export const usePosition = (reference: Element, targetEl: Element, options: PostionOptions) : PositionStyle | null => {
  const { margin = 8, placement = 'bottom-start', container: containerElement = document.body, watch = true } = options;

  const target = useBoundingClientRect(targetEl, watch);
  const referenceBox = useBoundingClientRect(reference, watch);
  const container = useBoundingClientRect(containerElement, watch);

  const targetBoundaries = useMemo(() => getTargetBoundaries({ referenceBox, target, margin }), [referenceBox, target, margin]);
  const variantStore = useMemo(() => getVariantBoundaries({ referenceBox, target }), [referenceBox, target]);

  const style = useMemo(() => getPositionStyle({ placement, container, targetBoundaries, variantStore, target }), [placement, container, targetBoundaries, variantStore, target]);

  return style;
};
