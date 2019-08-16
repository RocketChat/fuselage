import React from 'react';
import ReactDOM from 'react-dom';

import { InputGroup } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
