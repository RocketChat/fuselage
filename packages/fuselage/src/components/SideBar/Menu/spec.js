import React from 'react';
import ReactDOM from 'react-dom';

import { SideBarMenu } from './index';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SideBarMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
