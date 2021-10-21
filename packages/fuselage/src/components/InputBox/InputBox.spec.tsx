import React from 'react';
import ReactDOM from 'react-dom';

import { InputBox } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputBox type='text' />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Skeleton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputBox.Skeleton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
