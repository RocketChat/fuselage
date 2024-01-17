import type { StylingProps } from './stylingProps';
import { extractStylingProps } from './stylingProps';
import { appendClassName } from '../../helpers/appendClassName';
import { useStyle } from '../../hooks/useStyle';

export const useStylingProps = <TProps extends { className?: string }>(
  originalProps: TProps & Partial<StylingProps>
): TProps => {
  const [props, styles] = extractStylingProps(originalProps);

  const newClassName = useStyle(styles, undefined);

  if (newClassName) {
    props.className = props.className
      ? appendClassName(props.className, newClassName)
      : newClassName;
  }

  return props;
};
