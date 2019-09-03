import React from 'react';
import ReactDOM from 'react-dom';

import { Headline, Subtitle, Paragraph, Text } from './index';


describe('Headline', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Headline />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Subtitle', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Subtitle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Paragraph', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paragraph />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Text', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Text />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
