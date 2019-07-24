import React from 'react';
import ReactDOM from 'react-dom';

import { FormLabel } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormLabel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
