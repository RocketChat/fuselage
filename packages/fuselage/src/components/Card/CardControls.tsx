import type { HTMLAttributes } from 'react';
import React from 'react';

/** @public */
export type CardControlsProps = HTMLAttributes<HTMLDivElement>;

/** @public */
const CardControls = (props: CardControlsProps) => (
  <div className='rcx-card__controls' {...props} />
);

export default CardControls;
