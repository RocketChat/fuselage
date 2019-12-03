import React from 'react';

import { createStyledComponent } from '../../styles';

const Container = createStyledComponent('rcx-level', 'nav');
const ItemContainer = createStyledComponent('rcx-level__item', 'div');

export const Level = React.forwardRef(function Level(props, ref) {
  return <Container ref={ref} {...props} />;
});

Level.displayName = 'Level';

export const LevelItem = React.forwardRef(function LevelItem(props, ref) {
  return <ItemContainer ref={ref} {...props} />;
});

LevelItem.displayName = 'Level.Item';

Level.Item = LevelItem;
