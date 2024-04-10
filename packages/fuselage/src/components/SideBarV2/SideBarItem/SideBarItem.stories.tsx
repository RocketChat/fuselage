import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SideBar } from '../..';
import {
  GenericCondensedItem,
  GenericExtendedItem,
  GenericMediumItem,
  decorators,
} from '../helpers';

export default {
  title: 'Navigation/SideBar/Item',
  component: SideBar,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },
  decorators,
} as ComponentMeta<typeof SideBar>;

export const Condensed: ComponentStory<typeof SideBar> = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericCondensedItem key={i} i={i} />
    ))}
  </>
);

export const Medium: ComponentStory<typeof SideBar> = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericMediumItem key={i} i={i} />
    ))}
  </>
);

export const Extended: ComponentStory<typeof SideBar> = () => (
  <>
    {Array.from({ length: 8 }).map((_, i) => (
      <GenericExtendedItem key={i} i={i} />
    ))}
  </>
);
