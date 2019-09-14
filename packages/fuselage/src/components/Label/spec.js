import React from 'react';
import ReactDOM from 'react-dom';

import { Label } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Label />, div);
  ReactDOM.unmountComponentAtNode(div);
});
