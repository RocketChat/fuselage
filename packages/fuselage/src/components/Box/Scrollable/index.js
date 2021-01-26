import { css } from '@rocket.chat/css-in-js';
import { useStyle } from '@rocket.chat/fuselage-box';
import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { useRef, useCallback } from 'react';

import { appendClassName } from '../../../helpers/appendClassName';
import { BoxTransforms, useComposedBoxTransform } from '../transforms';

const getTouchingEdges = (element) => ({
  top: !element.scrollTop,
  bottom: !(element.scrollTop + element.clientHeight - element.scrollHeight),
  left: !element.scrollLeft,
  right: !(element.scrollLeft + element.clientWidth - element.scrollWidth),
});

const pollTouchingEdges = (element, touchingEdgesRef, onScrollContent) => {
  const touchingEdges = touchingEdgesRef.current;
  const newTouchingEdges = getTouchingEdges(element);

  const dirty =
    touchingEdges.top !== newTouchingEdges.top ||
    touchingEdges.bottom !== newTouchingEdges.bottom ||
    touchingEdges.left !== newTouchingEdges.left ||
    touchingEdges.right !== newTouchingEdges.right;

  if (dirty) {
    touchingEdgesRef.current = newTouchingEdges;
    onScrollContent(newTouchingEdges);
  }
};

function Scrollable({
  children,
  horizontal,
  vertical,
  smooth,
  onScrollContent,
}) {
  const scrollTimeoutRef = useRef();
  const touchingEdgesRef = useRef({});

  const handleScroll = useMutableCallback((event) => {
    const element = event.currentTarget;

    if (!scrollTimeoutRef.current) {
      pollTouchingEdges(element, touchingEdgesRef, onScrollContent);
    }

    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      scrollTimeoutRef.current = false;
      pollTouchingEdges(element, touchingEdgesRef, onScrollContent);
    }, 200);
  });

  const className = useStyle(css`
    position: relative;

    &::-webkit-scrollbar {
      width: ${4 / 16}rem;
      height: ${4 / 16}rem;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.05);
      background-color: var(
        --rcx-theme-scrollbar-thumb-color,
        rgba(0, 0, 0, 0.05)
      );
    }

    &:hover::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.15);
      background-color: var(
        --rcx-theme-scrollbar-thumb-hover-color,
        rgba(0, 0, 0, 0.15)
      );
    }

    ${(horizontal &&
      css`
        overflow-x: auto !important;
      `) ||
    (vertical &&
      css`
        overflow-y: auto !important;
      `) ||
    css`
      overflow: auto !important;
    `}
    ${smooth &&
    css`
      scroll-behavior: smooth !important;
    `}
  `);

  const transformFn = useCallback(
    (props) => {
      props.className = appendClassName(props.className, className);

      if (onScrollContent !== undefined && props.onScroll === undefined) {
        props.onScroll = handleScroll;
      }

      return props;
    },
    [className, handleScroll, onScrollContent]
  );

  return (
    <BoxTransforms.Provider
      children={children}
      value={useComposedBoxTransform(transformFn)}
    />
  );
}

Scrollable.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  smooth: PropTypes.bool,
  onScrollContent: PropTypes.func,
};

export default Scrollable;
