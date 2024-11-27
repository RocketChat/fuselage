import type { cssFn } from '@rocket.chat/css-in-js';
import type { ReactElement } from 'react';
import { cloneElement } from 'react';

import { useArrayLikeClassNameProp } from '../../hooks/useArrayLikeClassNameProp';
import type { Falsy } from '../../types/Falsy';

import type { StylingProps } from './stylingProps';
import { useStylingProps } from './useStylingProps';

export type StylingBoxProps = {
  children: ReactElement<{ className?: string }>;
  className?: string | cssFn | (string | cssFn | Falsy)[];
} & Partial<StylingProps>;

/**
 * Merges its `StylingProps` props into a `className` prop passed to a child element.
 *
 * This is intended to be used as a wrapper for components that accept styling props but don't need the weight of the
 * `Box` component prop handling internally.
 */
export const StylingBox = ({ children, ...props }: StylingBoxProps) => {
  const propsWithStringClassName = useArrayLikeClassNameProp(props);
  propsWithStringClassName.className = [
    children.props.className,
    propsWithStringClassName.className,
  ]
    .filter(Boolean)
    .join(' ');
  const propsWithoutStylingProps = useStylingProps(propsWithStringClassName);

  return cloneElement(children, propsWithoutStylingProps);
};

export default StylingBox;
