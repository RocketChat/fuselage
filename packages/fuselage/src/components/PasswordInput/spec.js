import React from 'react';
import ReactDOM from 'react-dom';

import { PasswordInput, PasswordInputToggle } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PasswordInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PasswordInputToggle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
