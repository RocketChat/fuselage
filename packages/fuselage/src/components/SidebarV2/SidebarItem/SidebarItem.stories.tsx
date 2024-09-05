import type { Meta, StoryFn } from '@storybook/react';

import { SidebarV2ListItem as SidebarListItem } from '../..';
import {
  GenericCondensedItem,
  GenericExtendedItem,
  GenericMediumItem,
  decorators,
} from '../helpers';

export default {
  title: 'Navigation/SidebarV2/Item',
  component: SidebarListItem,
  decorators,
} satisfies Meta<typeof SidebarListItem>;

export const Condensed: StoryFn<typeof SidebarListItem> = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericCondensedItem key={i} i={i} />
    ))}
  </>
);

export const Medium: StoryFn<typeof SidebarListItem> = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericMediumItem key={i} i={i} />
    ))}
  </>
);

export const Extended: StoryFn<typeof SidebarListItem> = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericExtendedItem key={i} i={i} />
    ))}
  </>
);
