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

import { Menu, StatusBullet, Tile } from '../..';
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
  <Tile position='relative' maxWidth={250}>
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
  </Tile>
);

export const WithAvatar: ComponentStory<typeof Option> = () => (
  <Tile position='relative' maxWidth={250}>
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
  </Tile>
);

export const WithPresence: ComponentStory<typeof Option> = () => (
  <Tile position='relative' maxWidth={250}>
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
  </Tile>
);

export const WithMenu: ComponentStory<typeof Option> = () => (
  <Tile position='relative' maxWidth={250}>
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
  </Tile>
);

export const WithIcon: ComponentStory<typeof Option> = () => (
  <Tile position='relative' maxWidth={250}>
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
  </Tile>
);
export const WithAndWithoutIcon: ComponentStory<typeof Option> = () => (
  <Tile position='relative' maxWidth={250}>
    <Option onClick={action('click')} icon='star' label='Lorem Ipsum Lorem' />
    <Option onClick={action('click')} icon='user' label='Lorem Ipsum Lorem' />
    <Option
      onClick={action('click')}
      icon='hashtag'
      label='Lorem Ipsum Lorem'
    />
    <Option onClick={action('click')} gap label='Lorem Ipsum Lorem' />
  </Tile>
);

export const Disabled: ComponentStory<typeof Option> = () => (
  <Tile position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <OptionContent>Enabled</OptionContent>
    </Option>
    <Option disabled={true}>
      <OptionContent>Disabled</OptionContent>
    </Option>
  </Tile>
);

export const AsUserItem: ComponentStory<typeof Option> = () => (
  <Tile position='relative' maxWidth={250}>
    <Option onClick={action('click')}>
      <OptionAvatar>
        <Avatar url={exampleAvatar} size='x28' />
      </OptionAvatar>
      <OptionColumn>
        <StatusBullet />
      </OptionColumn>
      <OptionContent>
        <Tile position='relative' maxWidth={250}>
          carla.culhane{' '}
          <Tile position='relative' maxWidth={250}>
            (carla hune)
          </Tile>
        </Tile>
      </OptionContent>
      <OptionMenu>
        <Menu options={menuOptions} />
      </OptionMenu>
    </Option>
  </Tile>
);

export const AsSkeleton: ComponentStory<typeof Option> = () => (
  <Tile position='relative' maxWidth={250}>
    <OptionSkeleton />
  </Tile>
);
