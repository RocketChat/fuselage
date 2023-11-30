import type { AllHTMLAttributes } from 'react';
import React from 'react';

import CardHorizontal from './CardHorizontal';
import CardVertical from './CardVertical';

const Card = ({
  horizontal,
  ...props
}: { horizontal?: boolean } & AllHTMLAttributes<HTMLElement>) =>
  horizontal ? <CardHorizontal {...props} /> : <CardVertical {...props} />;

export default Card;
