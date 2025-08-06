import type { ReactNode } from 'react';
import { Children, cloneElement } from 'react';
import type { StackProps } from 'tamagui';

type MarginsProps = {
  all?: StackProps['margin'];
  block?: StackProps['marginVertical'];
  blockStart?: StackProps['marginTop'];
  blockEnd?: StackProps['marginBottom'];
  inline?: StackProps['marginHorizontal'];
  inlineStart?: StackProps['marginLeft'];
  inlineEnd?: StackProps['marginRight'];
  children: ReactNode;
};

export const Margins = ({
  all,
  block,
  blockStart,
  blockEnd,
  inline,
  inlineStart,
  inlineEnd,
  children,
}: MarginsProps) => {
  const marginProps: StackProps = {};

  if (all !== undefined) {
    marginProps.margin = all;
  }

  if (block !== undefined) {
    marginProps.marginVertical = block;
  }

  if (blockStart !== undefined) {
    marginProps.marginTop = blockStart;
  }

  if (blockEnd !== undefined) {
    marginProps.marginBottom = blockEnd;
  }

  if (inline !== undefined) {
    marginProps.marginHorizontal = inline;
  }

  if (inlineStart !== undefined) {
    marginProps.marginLeft = inlineStart;
  }

  if (inlineEnd !== undefined) {
    marginProps.marginRight = inlineEnd;
  }

  return (
    <>
      {Children.map(children, (child) =>
        cloneElement(child as any, marginProps)
      )}
    </>
  );
};
