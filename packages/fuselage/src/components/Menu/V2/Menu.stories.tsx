import type { ComponentStory, ComponentMeta } from '@storybook/react';
import type { ComponentProps, ReactNode } from 'react';
import React, { useState } from 'react';

import {
  MenuV2 as Menu,
  MenuItem,
  MenuSection,
  MenuItemContent,
  MenuItemIcon,
  MenuItemInput,
  MenuItemSkeleton,
} from '.';
import Box from '../../Box/Box';
import { CheckBox } from '../../CheckBox';
import { RadioButton } from '../../RadioButton';
import Sidebar from '../../Sidebar';
import { ToggleSwitch } from '../../ToggleSwitch';

type MenuStories = ComponentMeta<typeof Menu>;

export default {
  title: 'Navigation/Menu/v2',
  component: Menu,
  decorators: [
    (story) => (
      <Box
        minHeight={50}
        height='full'
        minWidth={100}
        maxWidth={250}
        width={'full'}
      >
        {story()}
      </Box>
    ),
  ],
  parameters: {
    docs: {
      source: {
        excludeDecorators: true,
        transform: (src: string) => console.log(src),
      },
      description: {
        component: 'Kebab Menu. Use `<MenuItem>` to render the menu items.',
      },
    },
  },
} as MenuStories;

export const Simple: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} placement='right-start'>
    <MenuItem key='1'>Profile</MenuItem>
    <MenuItem key='2'>Chats</MenuItem>
    <MenuItem key='3'>Settings</MenuItem>
  </Menu>
);

export const Complex: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuItem key='profile'>
      <MenuItemIcon name='user' />
      <MenuItemContent>Profile</MenuItemContent>
    </MenuItem>
    <MenuItem key='chats'>
      <MenuItemIcon name='chat' />
      <MenuItemContent>Chats</MenuItemContent>
    </MenuItem>
    <MenuItem key='settings'>
      <MenuItemIcon name='cog' />
      <MenuItemContent>Settings</MenuItemContent>
    </MenuItem>
  </Menu>
);
Complex.parameters = {
  docs: {
    description: {
      story:
        'You can use `MenuItem` sub-components to render more complex items, with icons, avatars, text and inputs. The available components are: <br>`MenuItemAvatar` <br>`MenuItemColumn` <br>`MenuItemContent` <br>`MenuItemIcon` <br>`MenuItemInput` <br>`MenuItemSkeleton` <br>`MenuItemTitle`',
    },
  },
};

export const WithSections: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuSection title='Styles'>
      <MenuItem key='bold'>Bold</MenuItem>
      <MenuItem key='underline'>Underline</MenuItem>
    </MenuSection>
    <MenuSection>
      <MenuItem key='left'>Left</MenuItem>
      <MenuItem key='middle'>Middle</MenuItem>
      <MenuItem key='right'>Right</MenuItem>
    </MenuSection>
  </Menu>
);
WithSections.parameters = {
  docs: {
    description: {
      story:
        'Use `<MenuSection>` to group the menu items. The `title` prop is optional. If provided, a **title** and a **divider** is added - otherwise, only the divider is added.',
    },
  },
};

export const MenuDisplayExample: ComponentStory<typeof Menu> = (args) => {
  const [display, setDisplay] = useState('condensed');
  const [avatarDisplay, setAvatarDisplay] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [groupByUnread, setGroupByUnread] = useState(false);
  const [groupByFav, setGroupByFav] = useState(false);
  const [groupByTypes, setGroupByTypes] = useState(false);

  return (
    <Menu selectionMode='multiple' placement='top-start' {...args}>
      <MenuSection title='Display'>
        <MenuItem key='extended'>
          <MenuItemIcon name='extended-view' />
          <MenuItemContent>Extended</MenuItemContent>
          <MenuItemInput>
            <RadioButton
              mi='x16'
              onChange={() => setDisplay('extended')}
              checked={display === 'extended'}
            />
          </MenuItemInput>
        </MenuItem>
        <MenuItem key='medium'>
          <MenuItemIcon name='medium-view' />
          <MenuItemContent>Medium</MenuItemContent>
          <MenuItemInput>
            <RadioButton
              mi='x16'
              onChange={() => setDisplay('medium')}
              checked={display === 'medium'}
            />
          </MenuItemInput>
        </MenuItem>
        <MenuItem key='condensed'>
          <MenuItemIcon name='condensed-view' />
          <MenuItemContent>Condensed</MenuItemContent>
          <MenuItemInput>
            <RadioButton
              mi='x16'
              onChange={() => setDisplay('condensed')}
              checked={display === 'condensed'}
            />
          </MenuItemInput>
        </MenuItem>
        <MenuItem key='avatars'>
          <MenuItemIcon name='user-rounded' />
          <MenuItemContent>Avatars</MenuItemContent>
          <MenuItemInput>
            <ToggleSwitch
              mie='x16'
              onChange={() => setAvatarDisplay(!avatarDisplay)}
              checked={avatarDisplay}
            />
          </MenuItemInput>
        </MenuItem>
      </MenuSection>
      <MenuSection title='Sort by'>
        <MenuItem key='activities'>
          <MenuItemIcon name='clock' />
          <MenuItemContent>Activities</MenuItemContent>
          <MenuItemInput>
            <RadioButton
              mi='x16'
              onChange={() => setSortBy('activity')}
              checked={sortBy === 'activity'}
            />
          </MenuItemInput>
        </MenuItem>
        <MenuItem key='name'>
          <MenuItemIcon name='sort-az' />
          <MenuItemContent>Name</MenuItemContent>
          <MenuItemInput>
            <RadioButton
              mi='x16'
              onChange={() => setSortBy('alphabetical')}
              checked={sortBy === 'alphabetical'}
            />
          </MenuItemInput>
        </MenuItem>
      </MenuSection>
      <MenuSection title='Group by'>
        <MenuItem key='unread'>
          <MenuItemIcon name='flag' />
          <MenuItemContent>Unread</MenuItemContent>
          <MenuItemInput>
            <CheckBox
              mi='x16'
              checked={groupByUnread}
              onChange={() => setGroupByUnread(!groupByUnread)}
            />
          </MenuItemInput>
        </MenuItem>
        <MenuItem key='favorites'>
          <MenuItemIcon name='star' />
          <MenuItemContent>Favorites</MenuItemContent>
          <MenuItemInput>
            <CheckBox
              mi='x16'
              checked={groupByFav}
              onChange={() => setGroupByFav(!groupByFav)}
            />
          </MenuItemInput>
        </MenuItem>
        <MenuItem key='types'>
          <MenuItemIcon name='group-by-type' />
          <MenuItemContent>Types</MenuItemContent>
          <MenuItemInput>
            <CheckBox
              mi='x16'
              checked={groupByTypes}
              onChange={() => setGroupByTypes(!groupByTypes)}
            />
          </MenuItemInput>
        </MenuItem>
      </MenuSection>
    </Menu>
  );
};

export const MenuLoadingItem = () => (
  <Menu>
    <MenuItem key='1'>
      <Box w='x100'>
        <MenuItemSkeleton />
      </Box>
    </MenuItem>
    <MenuItem key='2'>
      <Box w='x100'>
        <MenuItemSkeleton />
      </Box>
    </MenuItem>
    <MenuItem key='3'>
      <Box w='x100'>
        <MenuItemSkeleton />
      </Box>
    </MenuItem>
  </Menu>
);

type Item = {
  name: string;
  icon: ComponentProps<typeof MenuItemIcon>['name'];
  input: ReactNode;
  description?: string;
};
const GenericMenuItem = ({ item: { icon, name, input } }: { item: Item }) => (
  <>
    {icon && <MenuItemIcon name={icon} />}
    <MenuItemContent>{name}</MenuItemContent>
    {input && <MenuItemInput>{input}</MenuItemInput>}
  </>
);
export const MenuMapGenericItem = () => {
  const [sortBy, setSortBy] = useState('name');

  const [groupByUnread, setGroupByUnread] = useState(false);
  const [groupByFav, setGroupByFav] = useState(false);
  const [groupByTypes, setGroupByTypes] = useState(false);

  const groupByItems: Item[] = [
    {
      name: 'Unread',
      icon: 'flag',
      input: (
        <CheckBox
          mi='x16'
          checked={groupByUnread}
          onChange={() => setGroupByUnread(!groupByUnread)}
        />
      ),
    },
    {
      name: 'favorites',
      icon: 'star',
      description:
        'Group by favorites and unread bla bla balaisudhf ioioasdhoaisdf asdifh oaisdhf aosidhf aisdhf aosdihf',
      input: (
        <CheckBox
          mi='x16'
          checked={groupByFav}
          onChange={() => setGroupByFav(!groupByFav)}
        />
      ),
    },
    {
      name: 'Types',
      icon: 'group-by-type',
      input: (
        <CheckBox
          mi='x16'
          checked={groupByTypes}
          onChange={() => setGroupByTypes(!groupByTypes)}
        />
      ),
    },
  ];
  const sortByItems: Item[] = [
    {
      name: 'Activities',
      icon: 'clock',
      input: (
        <CheckBox
          mi='x16'
          onChange={() => setSortBy('activity')}
          checked={sortBy === 'activity'}
        />
      ),
    },
    {
      name: 'Name',
      icon: 'sort-az',
      input: (
        <CheckBox
          mi='x16'
          onChange={() => setSortBy('alphabetical')}
          checked={sortBy === 'alphabetical'}
        />
      ),
    },
  ];

  return (
    <Menu selectionMode='multiple'>
      <MenuSection title='Sort by' items={sortByItems}>
        {(item) => (
          <MenuItem key={item.name}>
            <GenericMenuItem item={item} />
          </MenuItem>
        )}
      </MenuSection>
      <MenuSection title='Group By' items={groupByItems}>
        {(item) => (
          <MenuItem key={item.name}>
            <GenericMenuItem item={item} />
          </MenuItem>
        )}
      </MenuSection>
    </Menu>
  );
};

export const AsSidebarTopbarActions = () => (
  <Sidebar.TopBar.Actions>
    <Sidebar.TopBar.Action icon='user' title='user' />
    <Sidebar.TopBar.Action icon='book' title='book' />
    <Menu title='test' is={Sidebar.TopBar.Action}>
      <MenuItem>test</MenuItem>
      <MenuItem>test</MenuItem>
      <MenuItem>test</MenuItem>
      <MenuItem>test</MenuItem>
    </Menu>
    <Menu icon='sort' title='sort'>
      <MenuItem>test</MenuItem>
      <MenuItem>test</MenuItem>
      <MenuItem>test</MenuItem>
      <MenuItem>test</MenuItem>
    </Menu>
  </Sidebar.TopBar.Actions>
);

export const ControlledOpenState = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu isOpen={isOpen} onOpenChange={setIsOpen}>
      <MenuItem key='1'>Profile</MenuItem>
      <MenuItem key='2'>Chats</MenuItem>
      <MenuItem key='3'>Settings</MenuItem>
    </Menu>
  );
};
