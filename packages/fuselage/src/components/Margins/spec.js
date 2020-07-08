import React from 'react';
import ReactDOM from 'react-dom';

import { Margins } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Margins />, div);
  ReactDOM.unmountComponentAtNode(div);
});
