import { css } from '@rocket.chat/css-in-js';

import { appendClassName } from '../../helpers/appendClassName';
import { useStyle } from '../../hooks/useStyle';
import { BoxProps } from './props';

export const useArrayLikeClassNameProp = (
  props: BoxProps
): Record<string, unknown> => {
  const classNames = ([] as (
    | undefined
    | string
    | ReturnType<typeof css>
  )[]).concat(
    props.className as
      | undefined
      | string
      | ReturnType<typeof css>
      | (undefined | string | ReturnType<typeof css>)[]
  );

  const cssFns = classNames.filter((value) => typeof value === 'function');
  const stylesClassName = useStyle(
    css`
      ${cssFns}
    `,
    props
  );

  const strings = classNames.filter((value) => typeof value === 'string');

  props.className = strings.reduce(
    (className, string) => appendClassName(className, string),
    stylesClassName || ''
  );

  return props;
};
