import type { cssFn } from '@tamagui/core';

export const useArrayLikeClassNameProp = (props: {
  className?: string | cssFn | (string | cssFn | false | null)[];
}) => {
  const { className, ...rest } = props;

  if (!className) {
    return { ...rest, className: '' };
  }

  if (Array.isArray(className)) {
    return {
      ...rest,
      className: className.filter(Boolean).join(' '),
    };
  }

  return props;
};
