import React from 'react';
import ReactDOM from 'react-dom';

import { Hint } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hint>Help text</Hint>, div);
  ReactDOM.unmountComponentAtNode(div);
});
