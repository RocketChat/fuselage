import React from 'react';
import ReactDOM from 'react-dom';

import { Option } from '.';

it('Option renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Option />, div);
  ReactDOM.unmountComponentAtNode(div);
});
