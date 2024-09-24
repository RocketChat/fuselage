import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import { exampleAvatar, menuOptions } from '../../../.storybook/helpers';
import { Avatar } from '../Avatar';
import Box from '../Box';
import { Menu } from '../Menu';
import { StatusBullet } from '../StatusBullet';
import Tile from '../Tile';
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
  decorators: [
    (Story) => (
      <Tile position='relative' maxWidth={250} pi='0'>
        <Story />
      </Tile>
    ),
  ],
} satisfies Meta<typeof Option>;

export const Default: StoryFn<typeof Option> = () => (
  <>
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
  </>
);

export const WithAvatar: StoryFn<typeof Option> = () => (
  <>
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
  </>
);

export const WithPresence: StoryFn<typeof Option> = () => (
  <>
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
  </>
);

export const WithMenu: StoryFn<typeof Option> = () => (
  <>
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
  </>
);

export const WithIcon: StoryFn<typeof Option> = () => (
  <>
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
  </>
);
export const WithAndWithoutIcon: StoryFn<typeof Option> = () => (
  <>
    <Option onClick={action('click')} icon='star' label='Lorem Ipsum Lorem' />
    <Option onClick={action('click')} icon='user' label='Lorem Ipsum Lorem' />
    <Option
      onClick={action('click')}
      icon='hashtag'
      label='Lorem Ipsum Lorem'
    />
    <Option onClick={action('click')} gap label='Lorem Ipsum Lorem' />
  </>
);
WithAndWithoutIcon.parameters = {
  docs: {
    description: {
      story:
        " When using `Option`, you can also use the `gap` prop to add spacing to the left. If the list is mixed with items **with and without** icons, it's recommended to add the gap.",
    },
  },
};

export const Disabled: StoryFn<typeof Option> = () => (
  <>
    <Option onClick={action('click')}>
      <OptionContent>Enabled</OptionContent>
    </Option>
    <Option disabled={true}>
      <OptionContent>Disabled</OptionContent>
    </Option>
  </>
);

export const AsUserItem: StoryFn<typeof Option> = () => (
  <>
    <Option onClick={action('click')}>
      <OptionAvatar>
        <Avatar url={exampleAvatar} size='x28' />
      </OptionAvatar>
      <OptionColumn>
        <StatusBullet />
      </OptionColumn>
      <OptionContent>
        <Box>
          carla.culhane <Box>(carla hune)</Box>
        </Box>
      </OptionContent>
      <OptionMenu>
        <Menu options={menuOptions} />
      </OptionMenu>
    </Option>
  </>
);

export const AsSkeleton: StoryFn<typeof Option> = () => <OptionSkeleton />;
