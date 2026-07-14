import type { Meta } from '@storybook/react-webpack5';

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

export const Condensed = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericCondensedItem key={i} i={i} />
    ))}
  </>
);

export const Medium = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericMediumItem key={i} i={i} />
    ))}
  </>
);

export const Extended = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericExtendedItem key={i} i={i} />
    ))}
  </>
);
