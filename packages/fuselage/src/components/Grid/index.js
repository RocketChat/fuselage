import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export const GRID_DIRECTIONS = [
  'row',
  'row-reverse',
];

export const GRID_JUSTIFICATIONS = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];

export const GRID_ITEM_ALIGNMENTS = [
  'flex-start',
  'center',
  'flex-end',
  'stretch',
  'baseline',
];

export const GRID_DEFAULT_DIRECTION = 'row';
export const GRID_DEFAULT_JUSTIFICATION = 'center';
export const GRID_DEFAULT_ITEM_ALIGNMENT = 'center';
export const GRID_DEFAULT_GUTTER = 3;

export function Grid({
  container,
  direction = GRID_DEFAULT_DIRECTION,
  justification = GRID_DEFAULT_JUSTIFICATION,
  itemAlignment = GRID_DEFAULT_ITEM_ALIGNMENT,
  gutter = GRID_DEFAULT_GUTTER,
  outsideGutter = true,
  item,
  xs,
  sm,
  md,
  lg,
  xl,
  className,
  ...props
}) {
  return (
    <div
      className={useStyle(styles, 'Grid', {
        container,
        direction,
        justification,
        itemAlignment,
        gutter,
        outsideGutter,
        item,
        xs,
        sm,
        md,
        lg,
        xl,
      }, className)}
      {...props}
    />
  );
}
