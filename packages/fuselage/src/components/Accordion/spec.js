import React from 'react';
import ReactDOM from 'react-dom';

import { Accordion } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accordion>
    <Accordion.Item title='' />
  </Accordion>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Accordion.Item', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion.Item title='' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
