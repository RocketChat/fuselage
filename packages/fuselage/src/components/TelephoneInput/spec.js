import React from 'react';
import ReactDOM from 'react-dom';

import { TelephoneInput } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TelephoneInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
