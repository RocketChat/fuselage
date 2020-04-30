import { css } from '@rocket.chat/css-in-js';
import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import { useRef, cloneElement } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { mergeProps } from '../../../helpers/mergeProps';

const getTouchingEdges = (element) => ({
  top: !element.scrollTop,
  bottom: !(element.scrollTop + element.clientHeight - element.scrollHeight),
  left: !element.scrollLeft,
  right: !(element.scrollLeft + element.clientWidth - element.scrollWidth),
});

const pollTouchingEdges = (element, touchingEdgesRef, onScrollContent) => {
  const touchingEdges = touchingEdgesRef.current;
  const newTouchingEdges = getTouchingEdges(element);

  const dirty = (touchingEdges.top !== newTouchingEdges.top)
    || (touchingEdges.bottom !== newTouchingEdges.bottom)
    || (touchingEdges.left !== newTouchingEdges.left)
    || (touchingEdges.right !== newTouchingEdges.right);

  if (dirty) {
    touchingEdgesRef.current = newTouchingEdges;
    onScrollContent(newTouchingEdges);
  }
};

export function Scrollable({ children, horizontal, vertical, smooth, onScrollContent, ...props }) {
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

  return flattenChildren(children).map((child) => cloneElement(child, mergeProps(child.props, {
    className: [
      css`
        position: relative;

        &::-webkit-scrollbar {
          width: ${ 4 / 16 }rem;
          height: ${ 4 / 16 }rem;
        }

        &::-webkit-scrollbar-track {
          background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.05);
          background-color: var(--rcx-theme-scrollbar-thumb-color, rgba(0, 0, 0, 0.05));
        }

        &:hover::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.15);
          background-color: var(--rcx-theme-scrollbar-thumb-hover-color, rgba(0, 0, 0, 0.15));
        }
      `,
      (horizontal && css`overflow-x: auto !important;`)
        || (vertical && css`overflow-y: auto !important;`)
        || css`overflow: auto !important;`,
      smooth && css`scroll-behavior: smooth !important;`,
    ],
    onScroll: onScrollContent ? handleScroll : undefined,
    ...props,
  })));
}

Scrollable.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  smooth: PropTypes.bool,
  onScrollContent: PropTypes.func,
};
