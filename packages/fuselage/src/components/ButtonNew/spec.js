import React from 'react';
import ReactDOM from 'react-dom';

import { ButtonVariant } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonVariant />, div);
  ReactDOM.unmountComponentAtNode(div);
});
