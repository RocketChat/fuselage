/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useRef, useState } from 'react';
import type { RefObject, CSSProperties } from 'react';

import { useMergedRefs } from '../useMergedRefs';
import { useSafely } from '../useSafely';
import type { Placement } from './Placement';
import type { PlacementVariant } from './PlacementVariant';
import type { Position } from './Position';
import type { TargetBoundaries } from './getTargetBoundaries';
import { getTargetBoundaries } from './getTargetBoundaries';
import type { VariantBoundaries } from './getVariantBoundaries';
import { getVariantBoundaries } from './getVariantBoundaries';
import { getOffsetRect, useBoundingClientRect } from './useBoundingClientRect';

export type UsePositionOptions = {
  margin?: number;
  container?: Element;
  placement?: Placement;
};

export type UsePositionResult = {
  style: CSSProperties;
  placement?: Placement;
};

type TargetBoundariesKey = keyof TargetBoundaries;
type VariantBoundariesKey = keyof VariantBoundaries;
type VariantBoundariesKeyWithoutDirection = VariantBoundariesKey extends `${
  | 'h'
  | 'v'}${infer U}`
  ? U
  : never;

const fallbackOrder: Record<Position, TargetBoundariesKey[]> = {
  top: ['t', 'b', 'r', 'l'],
  bottom: ['b', 't', 'r', 'l'],
  right: ['r', 'l', 't', 'b'],
  left: ['l', 'r', 'b', 't'],
};

const fallbackOrderVariant: Record<
  PlacementVariant,
  VariantBoundariesKeyWithoutDirection[]
> = {
  start: ['s', 'e', 'm'],
  middle: ['m', 's', 'e'],
  end: ['e', 's', 'm'],
};

const keysToPlacementMap: Record<TargetBoundariesKey, Position> &
  Record<VariantBoundariesKeyWithoutDirection, PlacementVariant> = {
  t: 'top',
  b: 'bottom',
  l: 'left',
  r: 'right',
  s: 'start',
  e: 'end',
  m: 'middle',
};

const emptyStyle: UsePositionResult = {
  style: {
    position: 'fixed',
    visibility: 'hidden',
  },
};

const splitPlacement = (placement: Placement) => {
  const [placementKey, variantKey = 'middle'] = placement.split('-');

  return [placementKey as Position, variantKey as PlacementVariant] as const;
};

export function getPositionStyle({
  placement,
  targetRect,
  containerRect,
  targetBoundaries,
  variantBoundaries,
  offset,
  margin = 0,
}: {
  placement: Placement;
  targetRect: DOMRect;
  containerRect: DOMRect;
  targetBoundaries: TargetBoundaries;
  variantBoundaries: VariantBoundaries;
  offset: {
    left: number;
    top: number;
  };
  margin?: number;
}): UsePositionResult {
  if (!targetBoundaries) {
    return emptyStyle;
  }

  const { top, left, bottom, right } = containerRect;

  const [position, placementVariant] = splitPlacement(placement);

  const placementAttempts = fallbackOrder[position];
  const variantsAttempts = fallbackOrderVariant[placementVariant];

  for (const placementAttempt of placementAttempts) {
    const directionVertical = ['t', 'b'].includes(placementAttempt);

    const [positionKey, variantKey] = directionVertical
      ? ['top', 'left']
      : ['left', 'top'];

    const point = targetBoundaries[placementAttempt];

    const [positionBox, variantBox] = directionVertical
      ? [targetRect.height, targetRect.width]
      : [targetRect.width, targetRect.height];
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
      const variantPoint =
        variantBoundaries[`${directionVertical ? 'v' : 'h'}${v}`];

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
          zIndex: 9999,
          opacity: 1,
        },
        placement: `${keysToPlacementMap[placementAttempt]}-${keysToPlacementMap[v]}`,
      };
    }
  }

  const placementAttempt = placementAttempts[0];

  const directionVertical = ['t', 'b'].includes(placementAttempt);

  const point = targetBoundaries[placementAttempt];
  const variantPoint =
    variantBoundaries[`${directionVertical ? 'v' : 'h'}${variantsAttempts[0]}`];

  return {
    style: {
      top: `${point - offset.top}px`,
      left: `${variantPoint - offset.left}px`,
      position: 'fixed',
      ...(bottom < targetRect.height + point && {
        bottom: `${margin}px`,
        overflowY: 'auto',
      }),
      ...({ zIndex: '9999' } as any),
    },
    placement: `${keysToPlacementMap[placementAttempt]}-${
      keysToPlacementMap[variantsAttempts[0]]
    }`,
  } as UsePositionResult;
}

/**
 * Hook to deal and position an element using an anchor
 * @param anchorRef - the anchor
 * @param targetRef - the element to be positioned
 * @param options - options to position
 * @returns The style containing top and left position
 * @public
 */
export function usePosition<
  TTarget extends HTMLElement,
  TAnchor extends HTMLElement
>(
  anchorRef: RefObject<TAnchor>,
  targetRef: RefObject<TTarget>,
  {
    margin = 8,
    placement = 'bottom-start',
    container = document.body,
  }: UsePositionOptions = {}
): UsePositionResult {
  const [style, setStyle] = useSafely(useState<UsePositionResult>(emptyStyle));
  // Get the bounding client rect of the target, anchor and container

  const [targetRectRef] = useBoundingClientRect();
  const [anchorRectRef] = useBoundingClientRect();
  const [containerRectRef] = useBoundingClientRect();

  const containerRef = useRef(container);

  useEffect(() => {
    containerRef.current = container;
  }, [container]);

  useMergedRefs(anchorRef, anchorRectRef);
  useMergedRefs(targetRef, targetRectRef);
  useMergedRefs(containerRef, containerRectRef);

  useEffect(() => {
    const target = targetRef.current;
    const anchor = anchorRef.current;
    const targetParent = target?.parentElement;

    if (!target || !anchor || !targetParent) {
      return;
    }

    const targetRect = getOffsetRect(target);

    const anchorRect = anchor.getBoundingClientRect();

    const targetBoundaries = getTargetBoundaries({
      anchorRect,
      targetRect,
      margin,
    });

    const variantBoundaries = getVariantBoundaries({
      anchorRect,
      targetRect,
    });

    const offset = getOffsetRecFromBody(target);

    return setStyle(
      getPositionStyle({
        placement,
        containerRect: container.getBoundingClientRect(),
        targetBoundaries,
        variantBoundaries,
        targetRect,
        margin,
        offset,
      })
    );
  }, [anchorRef, container, margin, placement, setStyle, targetRef]);
  return style;
}

const getContainer = (descendant: HTMLElement | null) => {
  for (
    let element = descendant ?? document.body;
    element !== document.body;
    element = element.parentElement ?? document.body
  ) {
    if (
      getComputedStyle(element).transform !== 'none' ||
      getComputedStyle(element).position === 'fixed' ||
      getComputedStyle(element).willChange === 'transform'
    ) {
      return element;
    }
  }

  return document.body;
};

// calculate the offset of an element relative to the document
function getOffsetRecFromBody(target: HTMLElement) {
  const container = getContainer(target);

  if (container === document.body) {
    return {
      top: 0,
      left: 0,
    };
  }

  const rect = container.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left,
  };
}
