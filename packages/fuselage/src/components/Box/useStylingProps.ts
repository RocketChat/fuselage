import { appendClassName } from '../../helpers/appendClassName';
import { useStyle } from '../../hooks/useStyle';

import type { StylingProps } from './stylingProps';
import { extractStylingProps } from './stylingProps';

export const useStylingProps = <TProps extends { className?: string }>(
  originalProps: TProps,
): Omit<TProps, keyof StylingProps> => {
  const [props, styles] = extractStylingProps(originalProps);

  const newClassName = useStyle(styles, undefined);

  if (newClassName) {
    props.className = props.className
      ? appendClassName(props.className, newClassName)
      : newClassName;
  }

  return props;
};
