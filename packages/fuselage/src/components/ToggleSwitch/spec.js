import React from 'react';
import ReactDOM from 'react-dom';

import { ToggleSwitch } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToggleSwitch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
