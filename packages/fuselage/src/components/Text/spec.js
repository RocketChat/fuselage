import React from 'react';
import ReactDOM from 'react-dom';

import { Text } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Text />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Skeleton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Text.Skeleton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
