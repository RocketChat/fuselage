import React from 'react';
import ReactDOM from 'react-dom';

import { Subtitle } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Subtitle />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Skeleton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Subtitle.Skeleton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
