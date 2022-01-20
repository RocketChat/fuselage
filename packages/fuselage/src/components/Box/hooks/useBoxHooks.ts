import { css } from '@rocket.chat/css-in-js';

import { appendClassName } from '../../../helpers/appendClassName';
import { prependClassName } from '../../../helpers/prependClassName';
import { useStyle } from '../../../hooks/useStyle';

type useArrayLikeClassNamePropType = {
  className?: string | string[] | undefined;
};

export const useArrayLikeClassNameProp = (
  props: useArrayLikeClassNamePropType
) => {
  const classNames: string[] = Array(0).concat(props.className);

  const cssFns = classNames.filter((value) => typeof value === 'function');
  const stylesClassName = useStyle(
    css`
      ${cssFns}
    `,
    props
  );

  const strings: string[] = classNames.filter(
    (value) => typeof value === 'string'
  );

  props.className = strings.reduce(
    (className, string): any => appendClassName(className, string),
    (stylesClassName || '') as string
  );

  return props;
};

type useBoxOnlyPropsType = {
  className?: string | string[] | undefined;
  animated?: boolean | undefined;
  withRichContent?: string | boolean | undefined;
  [index: string]: unknown;
};

export const useBoxOnlyProps = (props: useBoxOnlyPropsType) => {
  Object.entries(props).forEach(([key, value]) => {
    if (key.slice(0, 4) === 'rcx-') {
      if (!value) {
        delete props[key];
        return;
      }

      const newClassName = value === true ? key : `${key}-${value}`;
      props.className = prependClassName(props.className, newClassName);
      delete props[key];
    }
  });

  if (props.animated) {
    props.className = prependClassName(props.className, 'rcx-box--animated');
    delete props.animated;
  }

  if (props.withRichContent) {
    if (props.withRichContent === 'inlineWithoutBreaks') {
      props.className = prependClassName(
        props.className,
        'rcx-box--with-inline-elements'
      );
    } else {
      props.className = prependClassName(
        props.className,
        'rcx-box--with-inline-elements'
      );

      props.className = prependClassName(
        props.className,
        'rcx-box--with-block-elements'
      );
    }
  }

  delete props.withRichContent;

  props.className = prependClassName(props.className, 'rcx-box rcx-box--full');

  return props;
};
