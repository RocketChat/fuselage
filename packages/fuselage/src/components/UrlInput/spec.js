import React from 'react';
import ReactDOM from 'react-dom';

import { UrlInput } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UrlInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
