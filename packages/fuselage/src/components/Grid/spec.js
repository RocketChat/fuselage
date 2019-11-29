import React from 'react';
import ReactDOM from 'react-dom';

import { Grid } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Grid />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Grid.Item', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Grid.Item />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
