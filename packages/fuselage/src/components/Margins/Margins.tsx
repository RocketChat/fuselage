import { css } from '@rocket.chat/css-in-js';
import React, {
  ComponentProps,
  FC,
  PropsWithChildren,
  useCallback,
} from 'react';

import { Box } from '..';
import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';
import { useStyle } from '../../hooks/useStyle';
import { margin } from '../../styleTokens';
import { BoxTransforms, useComposedBoxTransform } from '../Box/BoxTransforms';

type MarginsProps = PropsWithChildren<{
  all?: ComponentProps<typeof Box>['margin'];
  block?: ComponentProps<typeof Box>['marginBlock'];
  blockStart?: ComponentProps<typeof Box>['marginBlockStart'];
  blockEnd?: ComponentProps<typeof Box>['marginBlockEnd'];
  inline?: ComponentProps<typeof Box>['marginInline'];
  inlineStart?: ComponentProps<typeof Box>['marginInlineStart'];
  inlineEnd?: ComponentProps<typeof Box>['marginInlineEnd'];
  className?: string;
}>;

export const Margins: FC<MarginsProps> = (props) => {
  const {
    children,
    className,
    all,
    block,
    blockStart,
    blockEnd,
    inline,
    inlineStart,
    inlineEnd,
  } = props;

  const transformFn = useCallback(
    (props) => {
      if (all !== undefined && props.margin === undefined) {
        props.margin = all;
      }

      if (block !== undefined && props.marginBlock === undefined) {
        props.marginBlock = block;
      }

      if (blockStart !== undefined && props.marginBlockStart === undefined) {
        props.marginBlockStart = blockStart;
      }

      if (blockEnd !== undefined && props.marginBlockEnd === undefined) {
        props.marginBlockEnd = blockEnd;
      }

      if (inline !== undefined && props.marginInline === undefined) {
        props.marginInline = inline;
      }

      if (inlineStart !== undefined && props.marginInlineStart === undefined) {
        props.marginInlineStart = inlineStart;
      }

      if (inlineEnd !== undefined && props.marginInlineEnd === undefined) {
        props.marginInlineEnd = inlineEnd;
      }

      return props;
    },
    [all, block, blockEnd, blockStart, inline, inlineEnd, inlineStart]
  );

  const marginsClassName = useStyle(
    css`
      &:not(.rcx-box--full) {
        ${props.all &&
        css`
          margin: ${margin(props.all)};
        `}
        ${props.inline &&
        css`
          margin-inline: ${margin(props.inline)};
        `}
      ${props.inlineStart &&
        css`
          margin-inline-start: ${margin(props.inlineStart)};
        `}
      ${props.inlineEnd &&
        css`
          margin-inline-end: ${margin(props.inlineEnd)};
        `}
      ${props.block &&
        css`
          margin-block: ${margin(props.block)};
        `}
      ${props.blockStart &&
        css`
          margin-block-start: ${margin(props.blockStart)};
        `}
      ${props.blockEnd &&
        css`
          margin-block-end: ${margin(props.blockEnd)};
        `}
      }
    `,
    props
  ) as string;

  const patchedChildren = patchChildren(
    children,
    (childProps: {
      className: string | string[];
      [index: string]: unknown;
    }) => ({
      className: appendClassName(
        childProps.className,
        appendClassName(className, marginsClassName)
      ),
    })
  );

  return (
    <BoxTransforms.Provider
      children={patchedChildren}
      value={useComposedBoxTransform(transformFn)}
    />
  );
};
