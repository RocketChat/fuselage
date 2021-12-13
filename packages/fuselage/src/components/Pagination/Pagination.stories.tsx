import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Pagination } from '../..';

export default {
  title: 'Data Display/Pagination_new',
  component: Pagination,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={''} />
          <ArgsTable />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStory<typeof Pagination> = () => (
  <Pagination
    count={500}
    onSetItemsPerPage={action('setItemsPerPage')}
    onSetCurrent={action('setCurrent')}
  />
);

export const Divider: ComponentStory<typeof Pagination> = () => (
  <Pagination
    divider
    count={500}
    current={50}
    onSetItemsPerPage={action('setItemsPerPage')}
    onSetCurrent={action('setCurrent')}
  />
);
