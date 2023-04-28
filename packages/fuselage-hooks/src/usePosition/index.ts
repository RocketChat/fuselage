import { useState } from 'react';
import type { RefObject, CSSProperties } from 'react';

import { useDebouncedCallback } from '../useDebouncedCallback';
import { useMutableCallback } from '../useMutableCallback';
import { useSafely } from '../useSafely';
import type { Placement } from './Placement';
import type { PlacementVariant } from './PlacementVariant';
import type { Position } from './Position';
import type { TargetBoundaries } from './getTargetBoundaries';
import { getTargetBoundaries } from './getTargetBoundaries';
import type { VariantBoundaries } from './getVariantBoundaries';
import { getVariantBoundaries } from './getVariantBoundaries';
import { useBoundingClientRectChanges } from './useBoundingClientRectChanges';

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
  margin = 0,
}: {
  placement: Placement;
  targetRect: DOMRect;
  containerRect: DOMRect;
  targetBoundaries: TargetBoundaries;
  variantBoundaries: VariantBoundaries;
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
      top: `${point}px`,
      left: `${variantPoint}px`,
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

const UPDATE_DEBOUNCE_DELAY = 10;

/**
 * Hook to deal and position an element using an anchor
 * @param anchorRef - the anchor
 * @param targetRef - the element to be positioned
 * @param options - options to position
 * @returns The style containing top and left position
 * @public
 */
export function usePosition<TTarget extends Element, TAnchor extends Element>(
  anchorRef: RefObject<TAnchor>,
  targetRef: RefObject<TTarget>,
  {
    margin = 8,
    placement = 'bottom-start',
    container = document.body,
  }: UsePositionOptions = {}
): UsePositionResult {
  const [style, setStyle] = useSafely(useState<UsePositionResult>(emptyStyle));

  const handleBoundingClientRectChange = useDebouncedCallback(
    useMutableCallback(() => {
      const target = targetRef.current;
      const anchor = anchorRef.current;
      const targetParent = target?.parentElement;

      if (!target || !anchor || !targetParent) {
        return;
      }

      const clone = target.cloneNode(true) as HTMLElement;
      clone.style.bottom = '';
      clone.id = 'clone';
      targetParent.appendChild(clone);
      const targetRect = clone.getBoundingClientRect();
      targetParent.removeChild(clone);

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

      setStyle(
        getPositionStyle({
          placement,
          containerRect: container.getBoundingClientRect(),
          targetBoundaries,
          variantBoundaries,
          targetRect,
          margin,
        })
      );
    }),
    UPDATE_DEBOUNCE_DELAY
  );

  useBoundingClientRectChanges(targetRef, handleBoundingClientRectChange);
  useBoundingClientRectChanges(anchorRef, handleBoundingClientRectChange);
  useBoundingClientRectChanges(
    { current: container },
    handleBoundingClientRectChange
  );
  return style;
}
