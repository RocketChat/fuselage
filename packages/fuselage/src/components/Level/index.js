import React from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-level', 'nav');
const ItemContainer = Box.extend('rcx-level__item');

export function Level(props) {
  return <Container {...props} />;
}

Level.displayName = 'Level';

export function LevelItem(props) {
  return <ItemContainer {...props} />;
}

LevelItem.displayName = 'Level.Item';

Level.Item = LevelItem;
