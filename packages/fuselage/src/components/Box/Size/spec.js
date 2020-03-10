import React from 'react';
import ReactDOM from 'react-dom';

import { Size } from '../../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Size />, div);
  ReactDOM.unmountComponentAtNode(div);
});
