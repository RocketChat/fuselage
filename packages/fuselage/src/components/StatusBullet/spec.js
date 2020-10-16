import React from 'react';
import ReactDOM from 'react-dom';

import { StatusBullet } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StatusBullet />, div);
  ReactDOM.unmountComponentAtNode(div);
});
