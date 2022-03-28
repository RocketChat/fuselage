import type { AllHTMLAttributes } from 'react';

import { prependClassName } from '../helpers/prependClassName';

export const useBoxOnlyProps = <
  T extends { className: string; size?: AllHTMLAttributes<HTMLElement>['size'] }
>(
  props: T & {
    animated?: boolean;
    withRichContent?: boolean | 'inlineWithoutBreaks';
    elevation?: '0' | '1' | '2';
    htmlSize?: AllHTMLAttributes<HTMLElement>['size'];
    size?: AllHTMLAttributes<HTMLElement>['size'];
  } & Record<`rcx-${string}`, unknown>
): T => {
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
