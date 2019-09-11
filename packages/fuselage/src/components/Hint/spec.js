import React from 'react';
import ReactDOM from 'react-dom';

import { Hint } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hint />, div);
  ReactDOM.unmountComponentAtNode(div);
});
