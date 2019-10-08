import React from 'react';
import ReactDOM from 'react-dom';

import { Paragraph } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Paragraph />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Skeleton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paragraph.Skeleton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
