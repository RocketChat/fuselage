import React from 'react';
import ReactDOM from 'react-dom';

import { Flex } from '../..';

describe('Flex.Container', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Flex.Container />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Flex.Item', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Flex.Item />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
