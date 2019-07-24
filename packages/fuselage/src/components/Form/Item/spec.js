import React from 'react';
import ReactDOM from 'react-dom';

import { FormItem } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
