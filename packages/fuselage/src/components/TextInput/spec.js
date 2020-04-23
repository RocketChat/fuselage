import React from 'react';
import ReactDOM from 'react-dom';

import { TextInput } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
