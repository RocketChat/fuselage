import React from 'react';
import ReactDOM from 'react-dom';

import { TextAreaInput } from '../..';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextAreaInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
