import type { Keys } from '@rocket.chat/icons';
import nameToCharacterMapping from '@rocket.chat/icons';
import type { StoryFn, Meta } from '@storybook/react';
import { useState } from 'react';

import Box from '../Box';
import { Divider } from '../Divider';
import InputBox from '../InputBox';
import { Icon } from './Icon';

export default {
  title: 'Data Display/Icon',
  component: Icon,
} satisfies Meta<typeof Icon>;

const iconsList = Object.keys(nameToCharacterMapping).sort((a, b) =>
  a.localeCompare(b)
) as Keys[];

export const Default: StoryFn<typeof Icon> = () => (
  <Box color='default'>
    {iconsList.map((name) => (
      <Icon key={name} name={name} size='x40' />
    ))}
  </Box>
);

export const AvailableIcons: StoryFn<typeof Icon> = () => {
  const [filter, setFilter] = useState('');

  const filteredIcons = iconsList.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <Box display='flex' flexDirection='column'>
        <Box maxWidth='x200'>
          <InputBox
            type='text'
            value={filter}
            onChange={(e) => setFilter((e.target as HTMLInputElement).value)}
            placeholder='Search icons'
            addon={<Icon name='magnifier' size='x20' />}
          />
        </Box>
      </Box>
      <Divider />
      <Box
        display='flex'
        flexWrap='wrap'
        alignContent='flex-start'
        textAlign='center'
        height='90vh'
        overflow='auto'
      >
        {filteredIcons.map((name) => (
          <Box mb='x32' mi='x8' flexShrink={0} flexGrow={0} flexBasis='128px'>
            <Box>
              <Icon name={name} size='x40' color='default' />
            </Box>
            <Box color='hint'>{name}</Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
