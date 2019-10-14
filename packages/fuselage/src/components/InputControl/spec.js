import React from 'react';
import ReactDOM from 'react-dom';

import { InputControl } from '../..';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputControl />, div);
  ReactDOM.unmountComponentAtNode(div);
});
