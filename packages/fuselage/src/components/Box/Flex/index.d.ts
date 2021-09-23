import { ReactElement, ReactNode } from 'react';

type FlexContainerProps = {
  children?: ReactNode;
  inline?: boolean;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  wrap?: 'no-wrap' | 'wrap' | 'wrap-reverse';
  alignItems?: 'stretch' | 'start' | 'center' | 'end' | 'baseline';
  alignContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around';
};

type FlexItemProps = {
  children?: ReactNode;
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: number | string | 'auto';
  align?: 'auto' | 'start' | 'end' | 'center' | 'stretch';
};

const Flex: {
  Container: (props: FlexContainerProps) => ReactElement;
  Item: (props: FlexItemProps) => ReactElement;
};

export = Flex;
