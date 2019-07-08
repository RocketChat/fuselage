import React from 'react';
import ReactDOM from 'react-dom';

import { RadioButton } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RadioButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
