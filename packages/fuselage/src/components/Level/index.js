import React, { forwardRef } from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-level', 'nav');
const ItemContainer = Box.extend('rcx-level__item');

export const Level = forwardRef(function Level(props, ref) {
  return <Container ref={ref} {...props} />;
});

Level.displayName = 'Level';

export const LevelItem = forwardRef(function LevelItem(props, ref) {
  return <ItemContainer ref={ref} {...props} />;
});

LevelItem.displayName = 'Level.Item';

Level.Item = LevelItem;
