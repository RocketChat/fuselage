import type { Keys } from '@rocket.chat/icons';
import nameToCharacterMapping from '@rocket.chat/icons';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

import { Box, Divider, Icon } from '../..';
import InputBox from '../InputBox';

const iconsList = Object.keys(nameToCharacterMapping).sort((a, b) =>
  a.localeCompare(b)
) as Keys[];

export default {
  title: 'Data Display/Icon',
  component: Icon,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories />
          <ArgsTable />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = () => (
  <Box color='default'>
    {iconsList.map((name) => (
      <Icon key={name} name={name} size='x40' />
    ))}
  </Box>
);

export const AvailableIcons: ComponentStory<typeof Icon> = () => {
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
