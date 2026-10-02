import { Skeleton } from '../Skeleton';

import type { ItemProps } from './Item';
import Item from './Item';
import ItemContent from './ItemContent';
import ItemDescription from './ItemDescription';
import ItemMedia from './ItemMedia';
import ItemTitle from './ItemTitle';

export type ItemSkeletonProps = Pick<ItemProps, 'is' | 'size' | 'inset'> & {
  /**
   * Adds a second text line. Defaults to `true` for the extended size.
   */
  description?: boolean;
};

/**
 * A loading placeholder with the same height as an `Item` of the given size.
 */
const ItemSkeleton = ({
  is,
  size = 'condensed',
  inset,
  description = size === 'extended',
}: ItemSkeletonProps) => (
  <Item is={is} size={size} inset={inset} aria-hidden>
    <ItemMedia>
      <Skeleton variant='rect' width='100%' height='100%' />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>
        <Skeleton variant='text' width='60%' />
      </ItemTitle>
      {description && (
        <ItemDescription>
          <Skeleton variant='text' width='40%' />
        </ItemDescription>
      )}
    </ItemContent>
  </Item>
);

export default ItemSkeleton;
