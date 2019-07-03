import React from 'react';
import ReactDOM from 'react-dom';

import { FormDescription } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormDescription />, div);
  ReactDOM.unmountComponentAtNode(div);
});
