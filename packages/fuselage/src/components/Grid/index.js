import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


const directions = Object.freeze({
  row: 'row',
  rowReverse: 'row-reverse',
});

const justifications = Object.freeze({
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
});

const itemAlignments = Object.freeze({
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
  stretch: 'stretch',
  baseline: 'baseline',
});

export function Grid({
  container,
  direction = directions.row,
  justification = justifications.center,
  itemAlignment = itemAlignments.center,
  gutter = 3,
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

Grid.directions = directions;
Grid.justifications = justifications;
Grid.itemAlignments = itemAlignments;
