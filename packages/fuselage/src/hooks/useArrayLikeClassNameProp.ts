import { css } from '@rocket.chat/css-in-js';

import { appendClassName } from '../helpers/appendClassName';
import { useStyle } from './useStyle';

export const useArrayLikeClassNameProp = <
  T extends {
    className?:
      | string
      | ReturnType<typeof css>
      | (string | ReturnType<typeof css>)[];
  }
>(
  props: T
): T & { className: string } => {
  const classNames = props.className
    ? ([] as (string | ReturnType<typeof css>)[]).concat(props.className)
    : [];

  const cssFns = classNames.filter(
    (value): value is ReturnType<typeof css> => typeof value === 'function'
  );
  const stylesClassName = useStyle(
    css`
      ${cssFns}
    `,
    props
  );

  const strings = classNames.filter(
    (value): value is string => typeof value === 'string'
  );

  const className = strings.reduce(
    (className, string) => appendClassName(className, string),
    stylesClassName || ''
  );

  return Object.assign(props, { className });
};
