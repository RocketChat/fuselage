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

import { Box, Avatar, Menu, StatusBullet, Option } from '../..';
import { exampleAvatar, menuOptions } from '../../../../.storybook/helpers.js';

export default {
  title: 'Misc/Options/Option_new',
  component: Option,
  parameters: {
    docs: {
      description: {
        component:
          'The generic `Option` item of options. Can be freely used or inside the `Options` as well.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Option>;

export const Default: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <Option.Content>Lorem Ipsum Lorem</Option.Content>
    </Option>
    <Option>
      <Option.Content>
        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
      </Option.Content>
    </Option>
    <Option>
      <Option.Content>
        Lorem Ipsum Lorem{' '}
        <Option.Description>
          Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
        </Option.Description>
      </Option.Content>
    </Option>
  </Box>
);

export const WithAvatar: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <Option.Avatar>
        <Avatar url={exampleAvatar} size='x28' />
      </Option.Avatar>
      <Option.Content>Lorem Ipsum Lorem</Option.Content>
    </Option>
    <Option>
      <Option.Avatar>
        <Avatar url={exampleAvatar} size='x28' />
      </Option.Avatar>
      <Option.Content>
        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
      </Option.Content>
    </Option>
    <Option>
      <Option.Avatar>
        <Avatar url={exampleAvatar} size='x28' />
      </Option.Avatar>
      <Option.Content>
        Lorem Ipsum Lorem{' '}
        <Option.Description>
          Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
        </Option.Description>
      </Option.Content>
    </Option>
  </Box>
);

export const WithPresence: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <Option.Column>
        <StatusBullet />
      </Option.Column>
      <Option.Content>Lorem Ipsum Lorem</Option.Content>
    </Option>
    <Option>
      <Option.Avatar>
        <Avatar url={exampleAvatar} size='x28' />
      </Option.Avatar>
      <Option.Column>
        <StatusBullet />
      </Option.Column>
      <Option.Content>
        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
      </Option.Content>
    </Option>
  </Box>
);

export const WithMenu: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <Option.Content>Lorem Ipsum Lorem</Option.Content>
      <Option.Menu>
        <Menu options={menuOptions} />
      </Option.Menu>
    </Option>
    <Option>
      <Option.Avatar>
        <Avatar url={exampleAvatar} size='x28' />
      </Option.Avatar>
      <Option.Column>
        <StatusBullet />
      </Option.Column>
      <Option.Content>
        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
      </Option.Content>
      <Option.Menu>
        <Menu options={menuOptions} />
      </Option.Menu>
    </Option>
  </Box>
);

export const WithIcon: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <Option.Icon name='bell' />
      <Option.Content>Lorem Ipsum Lorem</Option.Content>
      <Option.Menu>
        <Menu options={menuOptions} />
      </Option.Menu>
    </Option>
    <Option>
      <Option.Avatar>
        <Avatar url={exampleAvatar} size='x28' />
      </Option.Avatar>
      <Option.Icon name='bell' />
      <Option.Column>
        <StatusBullet />
      </Option.Column>
      <Option.Content>
        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
      </Option.Content>
      <Option.Menu>
        <Menu options={menuOptions} />
      </Option.Menu>
    </Option>
  </Box>
);

export const AsUserItem: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={330}>
    <Option onClick={action('click')}>
      <Option.Avatar>
        <Avatar url={exampleAvatar} size='x28' />
      </Option.Avatar>
      <Option.Column>
        <StatusBullet />
      </Option.Column>
      <Option.Content>
        <Box withTruncatedText fontScale='p3'>
          carla.culhane{' '}
          <Box is='span' color='neutral-500'>
            (carla hune)
          </Box>
        </Box>
      </Option.Content>
      <Option.Menu>
        <Menu options={menuOptions} />
      </Option.Menu>
    </Option>
  </Box>
);

export const AsSkeleton: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={330}>
    <Option.Skeleton />
  </Box>
);
