import type { BoxProps } from '../components/box/Box';

export const useBoxOnlyProps = (props: BoxProps) => {
  const { animated, withRichContent, htmlSize, focusable, ...rest } = props;

  return rest;
};
