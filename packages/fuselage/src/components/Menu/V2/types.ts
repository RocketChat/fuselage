import type { Key, ReactElement, ReactNode } from 'react';

// Workaround since react-aria and react-stately don't export this type.
// Issue: https://github.com/adobe/react-spectrum/issues/3902

export interface Node<T> {
  /** The type of item this node represents. */
  'type': string;
  /** A unique key for the node. */
  'key': Key;
  /** The object value the node was created from. */
  'value': T;
  /** The level of depth this node is at in the heirarchy. */
  'level': number;
  /** Whether this item has children, even if not loaded yet. */
  'hasChildNodes': boolean;
  /** The loaded children of this node. */
  'childNodes': Iterable<Node<T>>;
  /** The rendered contents of this node (e.g. JSX). */
  'rendered': ReactNode;
  /** A string value for this node, used for features like typeahead. */
  'textValue': string;
  /** An accessibility label for this node. */
  'aria-label'?: string;
  /** The index of this node within its parent. */
  'index'?: number;
  /** A function that should be called to wrap the rendered node. */
  'wrapper'?: (element: ReactElement) => ReactElement;
  /** The key of the parent node. */
  'parentKey'?: Key;
  /** The key of the node before this node. */
  'prevKey'?: Key;
  /** The key of the node after this node. */
  'nextKey'?: Key;
  /** Additional properties specific to a particular node type. */
  'props'?: any;
  /** @private */
  'shouldInvalidate'?: (context: unknown) => boolean;
}
