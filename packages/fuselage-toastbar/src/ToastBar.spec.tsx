import { ToastBar } from '@rocket.chat/fuselage';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToastBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
