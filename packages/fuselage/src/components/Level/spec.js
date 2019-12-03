import React from 'react';
import ReactDOM from 'react-dom';

import { Level } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Level />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Level.Item', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Level.Item />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
