import namesToCharactersMapping from '@rocket.chat/icons';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Icon } from '../..';

export default {
  title: 'Misc/Icon_new',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = () => (
  <Box color='default'>
    {Object.keys(namesToCharactersMapping).map((name) => (
      <Icon key={name} name={name} size='x40' />
    ))}
  </Box>
);

const styles = {
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
    {Object.keys(namesToCharactersMapping).map((name) => (
      <div key={name} style={styles.wrapper}>
        <Box>
          <Icon name={name} size='x40' />
        </Box>
        <Box color='hint'>{name}</Box>
      </div>
    ))}
  </div>
);
