import React from 'react';
import ReactDOM from 'react-dom';

import { Field } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Field />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Label', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Field.Label />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Description', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Field.Description />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Row', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Field.Row />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Error', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Field.Error />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Hint', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Field.Hint />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
