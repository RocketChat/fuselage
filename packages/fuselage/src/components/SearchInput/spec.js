import React from 'react';
import ReactDOM from 'react-dom';

import { SearchInput } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
