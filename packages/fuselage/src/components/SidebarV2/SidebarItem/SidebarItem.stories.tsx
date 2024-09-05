import type { Meta, StoryFn } from '@storybook/react';

import { SideBarListItem } from '../..';
import {
  GenericCondensedItem,
  GenericExtendedItem,
  GenericMediumItem,
  decorators,
} from '../helpers';

export default {
  title: 'Navigation/SideBar/Item',
  component: SideBarListItem,
  decorators,
} satisfies Meta<typeof SideBarListItem>;

export const Condensed: StoryFn<typeof SideBarListItem> = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericCondensedItem key={i} i={i} />
    ))}
  </>
);

export const Medium: StoryFn<typeof SideBarListItem> = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericMediumItem key={i} i={i} />
    ))}
  </>
);

export const Extended: StoryFn<typeof SideBarListItem> = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericExtendedItem key={i} i={i} />
    ))}
  </>
);
