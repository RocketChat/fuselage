import { css, cssFn } from '@rocket.chat/css-in-js';

import { useStyle } from './useStyle';

type PropsWithArrayLikeClassName<P> = {
  className?: string | cssFn | (string | cssFn)[];
} & P;

export const useArrayLikeClassNameProp = <P>(
  props: PropsWithArrayLikeClassName<P>
): P => {
  const classNames = ([] as (string | cssFn | undefined)[]).concat(
    props.className
  );

  const cssFns = classNames.filter((value) => typeof value === 'function');

  const stylesClassName =
    useStyle(
      css`
        ${cssFns}
      `,
      props
    ) ?? '';

  const strings = classNames.filter((value) => typeof value === 'string');

  const stringsClassName = strings.join(' ');

  if (stylesClassName && stringsClassName) {
    props.className = `${stylesClassName} ${stringsClassName}`;
    return props;
  }

  if (stylesClassName) {
    props.className = stylesClassName;
    return props;
  }

  props.className = stringsClassName;
  return props;
};
