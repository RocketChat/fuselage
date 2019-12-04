import React from 'react';
import ReactDOM from 'react-dom';

import { Scrollable } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scrollable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
