import type { Keys } from '@rocket.chat/icons';
import nameToCharacterMapping from '@rocket.chat/icons';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import type { CSSProperties } from 'react';
import React from 'react';

import { Box, Icon } from '../..';

const iconsList = Object.keys(nameToCharacterMapping) as Keys[];

export default {
  title: 'Data Display/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = () => (
  <Box color='default'>
    {iconsList.map((name) => (
      <Icon key={name} name={name} size='x40' />
    ))}
  </Box>
);

const styles: {
  container?: CSSProperties;
  wrapper?: CSSProperties;
} = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  wrapper: {
    margin: '2rem 0.5rem',
    flex: '1 0 8rem',
  },
};

export const AvailableIcons: ComponentStory<typeof Icon> = () => (
  <div style={styles.container}>
    {iconsList.map((name) => (
      <div key={name} style={styles.wrapper}>
        <Box>
          <Icon name={name} size='x40' />
        </Box>
        <Box color='hint'>{name}</Box>
      </div>
    ))}
  </div>
);
