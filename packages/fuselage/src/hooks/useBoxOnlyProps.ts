import type { AllHTMLAttributes } from 'react';

import { prependClassName } from '../helpers/prependClassName';

export const useBoxOnlyProps = <TProps extends { className: string }>(
  props: TProps & {
    animated?: boolean;
    withRichContent?: boolean | 'inlineWithoutBreaks';
    htmlSize?: AllHTMLAttributes<HTMLElement>['size'];
    size?: AllHTMLAttributes<HTMLElement>['size'];
  }
): TProps => {
  Object.entries(props).forEach(([key, value]) => {
    if (key.slice(0, 4) === 'rcx-') {
      try {
        if (!value) {
          return;
        }

        const newClassName = value === true ? key : `${key}-${value}`;
        props.className = prependClassName(props.className, newClassName);
      } finally {
        delete (props as Record<string, unknown>)[key];
      }
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

  if (props.htmlSize) {
    props.size = props.htmlSize;
    delete props.htmlSize;
  }

  delete props.withRichContent;

  props.className = prependClassName(props.className, 'rcx-box rcx-box--full');

  return props;
};
