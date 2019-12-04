import React from 'react';
import ReactDOM from 'react-dom';

import { Chevron } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chevron />, div);
  ReactDOM.unmountComponentAtNode(div);
});
