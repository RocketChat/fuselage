import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { CSSProperties } from 'react';

import { Box, Icon } from '../..';
import { iconsList, IconType } from './IconsList';

export default {
  title: 'Misc/Icon_new',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = () => (
  <Box color='default'>
    {iconsList.map((name) => (
      <Icon key={name} name={name as IconType} size='x40' />
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
          <Icon name={name as IconType} size='x40' />
        </Box>
        <Box color='hint'>{name}</Box>
      </div>
    ))}
  </div>
);
