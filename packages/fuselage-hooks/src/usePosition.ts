import type { RefObject } from 'react';
import { useEffect, useRef } from 'react';

import { useDebouncedState } from './useDebouncedState';
import { useMutableCallback } from './useMutableCallback';

export type Positions = 'top' | 'left' | 'bottom' | 'right';

export type Placements =
  | 'top-start'
  | 'top-middle'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-middle'
  | 'bottom-end'
  | 'left-start'
  | 'left-middle'
  | 'left-end'
  | 'right-start'
  | 'right-middle'
  | 'right-end'
  | Positions;

export type PositionOptions = {
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
  t: number;
  b: number;
  r: number;
  l: number;
};

type VariantBoundaries = {
  vm: number;
  vs: number;
  ve: number;
  hs: number;
  he: number;
  hm: number;
};

type PositionStyle = {
  top: string;
  left: string;
  position?: 'fixed';
  ZIndex: '9999';
  transition: 'none !important';
  bottom?: '0px';
  overflowY?: 'auto';
};

type PositionEmptyResult = {
  visibility: 'hidden';
  top: '-9999px';
  left: '-9999px';
  position: 'fixed';
  overflowY?: 'initial';
};

type PositionResult = {
  style: PositionStyle | PositionEmptyResult;
  placement?: Placements;
};

enum PlacementMap {
  t = 'top',
  b = 'bottom',
  l = 'left',
  r = 'right',
  s = 'start',
  e = 'end',
  m = 'middle',
}

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
} as const;

const emptyStyle: PositionResult = {
  style: {
    position: 'fixed',
    visibility: 'hidden',
    top: '-9999px',
    left: '-9999px',
  },
};

const getParents = function (element: Element): Array<Element | Window> {
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

const useBoundingClientRect = (
  element: RefObject<Element>,
  watch = false,
  callback: () => void
): void =>
  useEffect(() => {
    if (!element.current) {
      return;
    }

    callback();

    if (!watch) {
      return;
    }

    const parents = getScrollParents(element.current);
    const passive = { passive: true };

    const observer = new ResizeObserver(() => {
      if (!element.current) {
        return;
      }
      callback();
    });
    observer.observe(element.current);
    window.addEventListener('resize', callback);
    parents.forEach((el) => el.addEventListener('scroll', callback, passive));

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', callback);
      parents.forEach((el) => el.removeEventListener('scroll', callback));
    };
  }, [watch, callback, element]);

export const getPositionStyle = ({
  placement = 'bottom-start',
  container,
  targetBoundaries,
  variantStore,
  target,
  margin = 0,
}: {
  placement: Placements;
  target: DOMRect;
  container: DOMRect;
  targetBoundaries: Boundaries;
  variantStore?: VariantBoundaries;
  margin?: number;
}): PositionResult => {
  if (!targetBoundaries) {
    return emptyStyle;
  }

  const { top, left, bottom, right } = container;

  const [placementKey, variantKey = 'middle'] = placement.split('-');

  const placementAttempts = fallbackOrder[placementKey];
  const variantsAttempts = fallbackOrderVariant[variantKey];

  for (const placementAttempt of placementAttempts) {
    const directionVertical = ['t', 'b'].includes(placementAttempt);

    const [positionKey, variantKey] = directionVertical
      ? ['top', 'left']
      : ['left', 'top'];

    const point = targetBoundaries[placementAttempt];

    const [positionBox, variantBox] = directionVertical
      ? [target.height, target.width]
      : [target.width, target.height];
    const [positionMaximum, variantMaximum] = directionVertical
      ? [bottom, right]
      : [right, bottom];
    const [positionMinimum, variantMinimum] = directionVertical
      ? [top, left]
      : [left, top];

    // if the point extrapolate the container boundaries
    if (point < positionMinimum || point + positionBox > positionMaximum) {
      continue;
    }

    for (const v of variantsAttempts) {
      // The position-value, the related size value of the popper and the limit
      const variantPoint = variantStore[`${directionVertical ? 'v' : 'h'}${v}`];

      if (
        variantPoint < variantMinimum ||
        variantPoint + variantBox > variantMaximum
      ) {
        continue;
      }
      return {
        style: {
          [positionKey]: `${point}px`,
          [variantKey]: `${variantPoint}px`,
          position: 'fixed',
          zIndex: '9999',
          opacity: 1,
        },
        placement: `${PlacementMap[placementAttempt]}-${PlacementMap[v]}`,
      } as unknown as PositionResult;
    }
  }

  const placementAttempt = placementAttempts[0];

  const directionVertical = ['t', 'b'].includes(placementAttempt);

  const point = targetBoundaries[placementAttempt];
  const variantPoint =
    variantStore[`${directionVertical ? 'v' : 'h'}${variantsAttempts[0]}`];

  return {
    style: {
      top: `${point}px`,
      left: `${variantPoint}px`,
      position: 'fixed',
      ...(bottom < target.height + point && {
        bottom: `${margin}px`,
        overflowY: 'auto',
      }),
      ZIndex: '9999',
    },
    placement: `${PlacementMap[placementAttempt]}-${
      PlacementMap[variantsAttempts[0]]
    }`,
  } as PositionResult;
};

export const getTargetBoundaries = ({
  referenceBox,
  target,
  margin = 0,
}: {
  referenceBox?: DOMRect;
  target?: DOMRect;
  margin?: number;
}): Boundaries | null =>
  referenceBox &&
  target && {
    t: referenceBox.top - target.height - margin,
    b: referenceBox.bottom + margin,
    r: referenceBox.right + margin,
    l: referenceBox.left - target.width - margin,
  };

export const getVariantBoundaries = ({
  referenceBox,
  target,
}: {
  referenceBox?: DOMRect;
  target?: DOMRect;
}): VariantBoundaries | null =>
  referenceBox &&
  target && {
    vm: -target.width / 2 + (referenceBox.left + referenceBox.width / 2),
    vs: referenceBox.left,
    ve: referenceBox.left + referenceBox.width - target.width,
    hs: referenceBox.bottom - referenceBox.height,
    he: referenceBox.bottom - target.height,
    hm: referenceBox.bottom - referenceBox.height / 2 - target.height / 2,
  };

/**
 * Hook to deal and position an element using an anchor
 * @param reference - the anchor
 * @param targetEl - the element to be positioned
 * @param options - options to position
 * @returns The style containing top and left position
 * @public
 */

export const usePosition = <T extends Element, R extends Element>(
  reference: RefObject<R>,
  target: RefObject<T>,
  options: PositionOptions
): PositionResult => {
  const {
    margin = 8,
    placement = 'bottom-start',
    container: containerElement = document.body,
    watch = true,
  } = options;
  const container = useRef(containerElement);

  const [style, setStyle] = useDebouncedState<PositionResult>(emptyStyle, 10);

  const callback = useMutableCallback(() => {
    const boundaries = target.current?.getBoundingClientRect();
    const targetBoundaries = getTargetBoundaries({
      referenceBox: reference.current.getBoundingClientRect(),
      target: boundaries,
      margin,
    });
    const variantStore = getVariantBoundaries({
      referenceBox: reference.current.getBoundingClientRect(),
      target: boundaries,
    });
    setStyle(
      getPositionStyle({
        placement,
        container: container.current.getBoundingClientRect(),
        targetBoundaries,
        variantStore,
        target: boundaries,
        margin,
      })
    );
  });

  useBoundingClientRect(target, watch, callback);
  useBoundingClientRect(reference, watch, callback);
  useBoundingClientRect(container, watch, callback);
  return style;
};
