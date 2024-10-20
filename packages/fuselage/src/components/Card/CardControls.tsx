import type { ReactNode, MouseEventHandler } from 'react';

type CardControlsProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const CardControls = ({ onClick, children }: CardControlsProps) => (
  <div className='rcx-card__controls' onClick={onClick} children={children} />
);

export default CardControls;
