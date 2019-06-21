import React from 'react';
import ReactDOM from 'react-dom';

import { SideBarMenuItem } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideBarMenuItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
