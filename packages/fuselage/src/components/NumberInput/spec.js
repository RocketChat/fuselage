import React from 'react';
import ReactDOM from 'react-dom';

import { NumberInput } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NumberInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
