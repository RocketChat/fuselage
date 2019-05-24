import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonGroup } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
