import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Menu, StatusBullet } from '../..';
import { exampleAvatar, menuOptions } from '../../../.storybook/helpers.js';
import { Avatar } from '../Avatar';
import Option from './Option';
import OptionAvatar from './OptionAvatar';
import OptionColumn from './OptionColumn';
import OptionContent from './OptionContent';
import OptionDescription from './OptionDescription';
import OptionIcon from './OptionIcon';
import OptionMenu from './OptionMenu';
import OptionSkeleton from './OptionSkeleton';

export default {
  title: 'Navigation/Option',
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
} as ComponentMeta<typeof Menu>;

export const Default: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <OptionContent>Lorem Ipsum Lorem</OptionContent>
    </Option>
    <Option>
      <OptionContent>
        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
      </OptionContent>
    </Option>
    <Option>
      <OptionContent>
        Lorem Ipsum Lorem{' '}
        <OptionDescription>
          Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
        </OptionDescription>
      </OptionContent>
    </Option>
  </Box>
);

export const WithAvatar: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <OptionAvatar>
        <Avatar url={exampleAvatar} size='x28' />
      </OptionAvatar>
      <OptionContent>Lorem Ipsum Lorem</OptionContent>
    </Option>
    <Option>
      <OptionAvatar>
        <Avatar url={exampleAvatar} size='x28' />
      </OptionAvatar>
      <OptionContent>
        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
      </OptionContent>
    </Option>
    <Option>
      <OptionAvatar>
        <Avatar url={exampleAvatar} size='x28' />
      </OptionAvatar>
      <OptionContent>
        Lorem Ipsum Lorem{' '}
        <OptionDescription>
          Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
        </OptionDescription>
      </OptionContent>
    </Option>
  </Box>
);

export const WithPresence: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <OptionColumn>
        <StatusBullet />
      </OptionColumn>
      <OptionContent>Lorem Ipsum Lorem</OptionContent>
    </Option>
    <Option>
      <OptionAvatar>
        <Avatar url={exampleAvatar} size='x28' />
      </OptionAvatar>
      <OptionColumn>
        <StatusBullet />
      </OptionColumn>
      <OptionContent>
        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
      </OptionContent>
    </Option>
  </Box>
);

export const WithMenu: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <OptionContent>Lorem Ipsum Lorem</OptionContent>
      <OptionMenu>
        <Menu options={menuOptions} />
      </OptionMenu>
    </Option>
    <Option>
      <OptionAvatar>
        <Avatar url={exampleAvatar} size='x28' />
      </OptionAvatar>
      <OptionColumn>
        <StatusBullet />
      </OptionColumn>
      <OptionContent>
        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
      </OptionContent>
      <OptionMenu>
        <Menu options={menuOptions} />
      </OptionMenu>
    </Option>
  </Box>
);

export const WithIcon: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <OptionIcon name='bell' />
      <OptionContent>Lorem Ipsum Lorem</OptionContent>
      <OptionMenu>
        <Menu options={menuOptions} />
      </OptionMenu>
    </Option>
    <Option>
      <OptionAvatar>
        <Avatar url={exampleAvatar} size='x28' />
      </OptionAvatar>
      <OptionIcon name='bell' />
      <OptionColumn>
        <StatusBullet />
      </OptionColumn>
      <OptionContent>
        Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
      </OptionContent>
      <OptionMenu>
        <Menu options={menuOptions} />
      </OptionMenu>
    </Option>
  </Box>
);

export const AsUserItem: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={330}>
    <Option onClick={action('click')}>
      <OptionAvatar>
        <Avatar url={exampleAvatar} size='x28' />
      </OptionAvatar>
      <OptionColumn>
        <StatusBullet />
      </OptionColumn>
      <OptionContent>
        <Box withTruncatedText fontScale='p2'>
          carla.culhane{' '}
          <Box is='span' color='neutral-500'>
            (carla hune)
          </Box>
        </Box>
      </OptionContent>
      <OptionMenu>
        <Menu options={menuOptions} />
      </OptionMenu>
    </Option>
  </Box>
);

export const AsSkeleton: ComponentStory<typeof Option> = () => (
  <Box position='relative' maxWidth={330}>
    <OptionSkeleton />
  </Box>
);
