import { css } from '@rocket.chat/css-in-js';

import { appendClassName } from '../../helpers/appendClassName';
import { useStyle } from '../../hooks/useStyle';

export const useArrayLikeClassNameProp = (props) => {
  const classNames = [].concat(props.className);

  const cssFns = classNames.filter((value) => typeof value === 'function');
  const stylesClassName = useStyle(css`${ cssFns }`, props);

  const strings = classNames.filter((value) => typeof value === 'string');

  props.className = strings.reduce(
    (className, string) => appendClassName(className, string),
    stylesClassName || '',
  );

  return props;
};
