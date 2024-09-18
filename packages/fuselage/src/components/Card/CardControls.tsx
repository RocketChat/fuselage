import type { ReactNode, MouseEvent } from 'react';

type CardControlsProps = {
  children?: ReactNode;
  onClick?: (e?: MouseEvent<HTMLOrSVGElement>) => void;
};

const CardControls = ({ onClick, children }: CardControlsProps) => (
  <div className='rcx-card__controls' onClick={onClick} children={children} />
);

export default CardControls;

export default CardControls;
