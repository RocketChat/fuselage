import React from 'react';
import ReactDOM from 'react-dom';

import { Divider } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Divider/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
